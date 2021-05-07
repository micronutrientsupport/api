// Uncomment these imports to begin using these cool features!

import {repository} from '@loopback/repository';
import {get, getModelSchemaRef} from '@loopback/rest';
import {BiomarkerSummary} from '../models/biomarker-summary.model';
import {BiomarkerSummaryRepository} from '../repositories/biomarker-summary.repository';
import {StandardJsonResponse} from './standardJsonResponse';
import {StandardOpenApiResponses} from './standardOpenApiResponses';

// import {inject} from '@loopback/core';


export class BiomarkerControllerController {
  constructor(
    @repository(BiomarkerSummaryRepository)
    public biomarkerSummaryRepository: BiomarkerSummaryRepository,
  ) { }

  @get('/biomarker', {
    responses:
      new StandardOpenApiResponses('Array of BiomarkerSummary model instances')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(BiomarkerSummary))
        .toObject(),
  })
  async find(): Promise<StandardJsonResponse<Array<BiomarkerSummary>>> {
    return this.biomarkerSummaryRepository.find()
      .then((biomarkerSummaries: BiomarkerSummary[]) => {
        return new StandardJsonResponse<Array<BiomarkerSummary>>(
          `${biomarkerSummaries.length} BiomarkerSummaries returned.`,
          biomarkerSummaries,
        );
      });
  }
}
