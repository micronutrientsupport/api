// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {get, param, Response, RestBindings} from '@loopback/rest';
import {BiomarkerSummary} from '../models/biomarker-summary.model';
import {BiomarkerSummaryRepository} from '../repositories/biomarker-summary.repository';
import {OpencpuService} from '../services';
import {StandardJsonResponse} from './standardJsonResponse';

export class BiomarkerControllerController {
  constructor(
    @repository(BiomarkerSummaryRepository)
    public biomarkerSummaryRepository: BiomarkerSummaryRepository,
    @inject('services.OpencpuService')
    protected opencpuService: OpencpuService,
    @inject(RestBindings.Http.RESPONSE) public response: Response,
  ) {}

  @get('/biomarker', {
    responses: {},
    // responses:
    //   new StandardOpenApiResponses('Array of BiomarkerSummary model instances')
    //     .setDataType('array')
    //     .setObjectSchema(getModelSchemaRef(BiomarkerSummary))
    //     .toObject(),
  })
  async find(
    @param.query.string('surveyId') surveyId: number,
    @param.query.string('groupId') groupId: string,
    @param.query.string('biomarker') biomarker: string,
    @param.query.string('aggregationField') aggregationField: string,
  ): Promise<{}> {
    const filter: Filter = {
      where: {
        surveyId: surveyId,
        groupId: groupId,
      },
      fields: {
        groupId: true,
        wealthQuintile: true,
        ageInMonths: true,
        isPregnant: true,
        wasFasting: true,
        timeOfDaySampled: true,
        surveyCluster: true,
        surveyStrata: true,
        surveyWeights: true,
      },
    };
    (filter as any).fields[biomarker] = true;
    return this.biomarkerSummaryRepository
      .find(filter)
      .then(async (biomarkerSummaries: BiomarkerSummary[]) => {
        // console.log('Summaries:', biomarkerSummaries);
        try {
          const out = await this.opencpuService.summaryStats(
            biomarkerSummaries,
            biomarker,
            aggregationField,
            groupId,
            {up: 100},
          );
          console.log((out as any).headers.location + 'console');
          console.log((out as any).body);
          console.log(process.env.npm_package_version);
          return new StandardJsonResponse<Array<{}>>(
            `${
              (out as any).body.length
            } Regional Biomarker summaries returned.`,
            (out as any).body,
          );
        } catch (e) {
          console.log(e);
          return {};
        }

        return new StandardJsonResponse<Array<BiomarkerSummary>>(
          `${biomarkerSummaries.length} BiomarkerSummaries returned.`,
          biomarkerSummaries,
        );
      });
  }
}
