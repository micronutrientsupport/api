// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {ImpactTotalFoodAvailability} from '../models';
import {ImpactTotalFoodAvailabilityRepository} from '../repositories';
import {StandardJsonResponse} from './standardJsonResponse';
import {StandardOpenApiResponses} from './standardOpenApiResponses';

// import {inject} from '@loopback/core';


export class ProjectionsControllerController {
  constructor(
    @repository(ImpactTotalFoodAvailabilityRepository)
    public impactTotalFoodAvailabilityRepository: ImpactTotalFoodAvailabilityRepository,
  ) { }

  @get('/projections/total/{countryId}/{mnId}', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(ImpactTotalFoodAvailability))
        .toObject(),
  })
  async find(
    @param.path.string('countryId') countryId: string,
    @param.path.string('mnId') mnId: string): Promise<object> {
    let filter: Filter = {
      where: {
        country: countryId,
      },
      fields: {
        scenario: true,
        year: true,
      }
    };

    (filter as any).fields[mnId] = true;
    (filter as any).fields[mnId + 'Diff'] = true;

    let data = await this.impactTotalFoodAvailabilityRepository.find(filter)
    return new StandardJsonResponse<Array<ImpactTotalFoodAvailability>>(
      `${data.length} impact results returned.`,
      data,
    );
  }
}
