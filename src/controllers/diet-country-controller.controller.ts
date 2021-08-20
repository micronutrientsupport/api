// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Top20MnPerCountry, Top20MnPerHhsurvey} from '../models';
import {
  Top20MnPerCountryRepository,
  Top20MnPerHhsurveyRepository,
} from '../repositories';
import {StandardJsonResponse} from './standardJsonResponse';
import {StandardOpenApiResponses} from './standardOpenApiResponses';

// import {inject} from '@loopback/core';

export class DietCountryControllerController {
  constructor(
    @repository(Top20MnPerCountryRepository)
    public top20MnPerCountryRepository: Top20MnPerCountryRepository,
    @repository(Top20MnPerHhsurveyRepository)
    public top20MnPerHhsurveyRepository: Top20MnPerHhsurveyRepository,
  ) {}

  @get(
    '/diet/household/top20/{countryId}/{micronutrientId}/{compositionId}/{consumptionId}',
    {
      summary: 'top 20 food household',
      responses: new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(Top20MnPerHhsurvey))
        .toObject(),
    },
  )
  async findTop20FoodsHousehold(
    @param.path.string('countryId') countryId: string,
    @param.path.string('micronutrientId') micronutrientId: string,
    @param.path.string('compositionId') compositionId: number,
    @param.path.string('consumptionId') consumptionId: number,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        //countryId: countryId,
        mnName: micronutrientId,
        fctSourceId: compositionId,
        surveyId: consumptionId,
      },
    };
    const data = await this.top20MnPerHhsurveyRepository.find(filter);
    return new StandardJsonResponse<Array<Top20MnPerHhsurvey>>(
      `${data.length} top food results returned.`,
      data,
    );
  }

  @get(
    '/diet/country/top20/{countryId}/{micronutrientId}/{compositionId}/{consumptionId}',
    {
      summary: 'top 20 country',
      responses: new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(Top20MnPerCountry))
        .toObject(),
    },
  )
  async findTop20FoodsCountry(
    @param.path.string('countryId') countryId: string,
    @param.path.string('micronutrientId') micronutrientId: string,
    @param.path.string('compositionId') compositionId: number,
    @param.path.string('consumptionId') consumptionId: number,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        countryId: countryId,
        mnName: micronutrientId,
        fctSourceId: compositionId,
        //dataSourceId: consumptionId
      },
    };
    const data = await this.top20MnPerCountryRepository.find(filter);
    return new StandardJsonResponse<Array<Top20MnPerCountry>>(
      `${data.length} top food results returned.`,
      data,
    );
  }
}
