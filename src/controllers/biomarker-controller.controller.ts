/* eslint-disable @typescript-eslint/naming-convention */
// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {
  Response,
  RestBindings,
  get,
  getModelSchemaRef,
  param,
} from '@loopback/rest';
import {CacheHeader} from '../decorators/cache-header.decorator';
import {BiomarkerThresholdList} from '../models';
import {BiomarkerSummary} from '../models/biomarker-summary.model';
import {BiomarkerThresholdListRepository} from '../repositories';
import {BiomarkerSummaryRepository} from '../repositories/biomarker-summary.repository';
import {OpencpuService} from '../services';
import {StandardJsonResponse} from './standardJsonResponse';
import {StandardOpenApiResponses} from './standardOpenApiResponses';

const camelCase = (string: string): string => {
  return string.replace(/-([a-z])/gi, function (all, letter) {
    return letter.toUpperCase();
  });
};

const toSnakeCase = (str: string) =>
  str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
export class BiomarkerControllerController {
  constructor(
    @repository(BiomarkerSummaryRepository)
    public biomarkerSummaryRepository: BiomarkerSummaryRepository,
    @repository(BiomarkerThresholdListRepository)
    public biomarkerThresholdListRepository: BiomarkerThresholdListRepository,
    @inject('services.OpencpuService')
    protected opencpuService: OpencpuService,
    @inject(RestBindings.Http.RESPONSE) public response: Response,
  ) {}

  @CacheHeader(86400)
  @get('/biomarker', {
    responses: new StandardOpenApiResponses(
      'Array of BiomarkerSummary model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(BiomarkerSummary))
      .toObject(),
  })
  async find(
    @param.query.string('surveyId') surveyId: number,
    @param.query.string('groupId') groupId: string,
    @param.query.string('biomarker') biomarker: string,
    @param.query.string('aggregationField') aggregationField: string,
  ): Promise<{}> {
    console.log('BM');
    const thresholdFilter: Filter = {
      where: {
        groupId: groupId,
        biomarkerId: biomarker,
      },
    };
    const thresholds = await this.biomarkerThresholdListRepository.find(
      thresholdFilter,
    );
    console.log({thresholdFilter});

    const counts: {[key: string]: number} = {};
    const tm = thresholds.reduce(
      (prev: {[key: string]: object}, threshold: BiomarkerThresholdList) => {
        if (threshold.thresholdType) {
          threshold.thresholdType = camelCase(
            threshold.thresholdType.replace(/\s+/g, ''),
          );
        }
        if (threshold.thresholdType) {
          if (counts[threshold.thresholdType]) {
            counts[threshold.thresholdType]++;
          } else {
            counts[threshold.thresholdType] = 1;
          }

          const cond: {[key: string]: number} = {};
          if (threshold.condition) {
            for (const [key, value] of Object.entries(threshold.condition)) {
              cond[toSnakeCase(key)] = value;
            }
          }
          prev[
            `${threshold.thresholdType}${
              counts[threshold.thresholdType] > 1
                ? counts[threshold.thresholdType]
                : ''
            }`
          ] = {
            //strip whitespace
            upper: threshold.upperThreshold,
            lower: threshold.lowerThreshold,
            thresholdType: threshold.thresholdType,
            conditionText: threshold.conditionText,
            condition: cond,
            comments: threshold.comments,
          };
        }
        return prev;
      },
      {},
    );

    console.log({tm});

    const filter: Filter = {
      where: {
        survey_id: surveyId,
        group_id: groupId,
      },
      fields: {
        group_id: true,
        age_in_months: true,
        sex: true,
        is_pregnant: true,
        is_smoker: true,
        was_fasting: true,
        is_adjusted_for_smoking: true,
        is_adjusted_for_altitude: true,
        time_of_day_sampled: true,
        altitude_in_metres: true,
        crp: true,
        agp: true,
        survey_cluster: true,
        survey_strata: true,
        survey_weight: true,
      },
    };
    (filter as any).fields[biomarker] = true;
    (filter as any).fields[aggregationField] = true;

    console.log({filter});

    const biomarkerSummaries: BiomarkerSummary[] =
      await this.biomarkerSummaryRepository.find(filter);

    console.log(biomarkerSummaries.length);
    console.log(biomarkerSummaries[0]);

    try {
      const out = await this.opencpuService.summaryStats(
        biomarkerSummaries,
        biomarker,
        aggregationField,
        groupId,
        tm,
      );

      console.log('Got response');

      (out as any).body.thresholds = tm;

      //console.log(out.body);

      return new StandardJsonResponse<Array<{}>>(
        `1 Regional Biomarker summaries returned.`,
        (out as any).body,
      );
    } catch (e) {
      return {
        error: {
          message: (e as any).message,
          data: biomarkerSummaries.length,
        },
      };
    }
  }
}
