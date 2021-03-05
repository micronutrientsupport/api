// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Top20MnPerCountry} from '../models';
import {Top20MnPerCountryRepository} from '../repositories';
import {StandardJsonResponse} from './standardJsonResponse';
import {StandardOpenApiResponses} from './standardOpenApiResponses';

// import {inject} from '@loopback/core';


export class DietCountryControllerController {
  constructor(
    @repository(Top20MnPerCountryRepository)
    public top20MnPerCountryRepository: Top20MnPerCountryRepository,
  ) { }

  @get('/diet/country/top20/{countryId}/{micronutrientId}/{compositionId}/{consumptionId}', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(Top20MnPerCountry))
        .toObject(),
  })
  async findFoodGroupScenario(
    @param.path.string('countryId') countryId: string,
    @param.path.string('micronutrientId') micronutrientId: string,
    @param.path.string('compositionId') compositionId: number,
    @param.path.string('consumptionId') consumptionId: number): Promise<object> {
    let filter: Filter = {
      where: {
        countryId: countryId,
        mnName: micronutrientId,
        fctSourceId: compositionId,
        //dataSourceId: consumptionId
      }
    };
    let data = await this.top20MnPerCountryRepository.find(filter)
    return new StandardJsonResponse<Array<Top20MnPerCountry>>(
      `${data.length} top food results returned.`,
      data,
    );
  }
}
