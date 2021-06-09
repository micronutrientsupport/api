// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Top20MnPerCountry, Top20MnPerHhsurvey} from '../../../models';
import {Top20MnPerCountryRepository, Top20MnPerHhsurveyRepository} from '../../../repositories';
import {StandardJsonResponse} from '../../standardJsonResponse';
import {StandardOpenApiResponses} from '../../standardOpenApiResponses';

// import {inject} from '@loopback/core';


export class FoodItemsControllerController {
  constructor(
    @repository(Top20MnPerCountryRepository)
    public top20MnPerCountryRepository: Top20MnPerCountryRepository,
    @repository(Top20MnPerHhsurveyRepository)
    public top20MnPerHhsurveyRepository: Top20MnPerHhsurveyRepository,
  ) { }

  @get('/diet/household/topfood', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(Top20MnPerHhsurvey))
        .toObject(),
  })
  async findTop20FoodsHousehold(
    @param.query.string('countryId') countryId: string,
    @param.query.string('micronutrientId') micronutrientId: string,
    @param.query.string('compositionId') compositionId: number,
    @param.query.string('consumptionId') consumptionId: number,
    @param.query.number('ranking') ranking: number): Promise<object> {
    let filter: Filter = {
      where: {
        countryId: countryId,
        mnName: micronutrientId,
        fctSourceId: compositionId,
        surveyId: consumptionId,
        ranking: ranking
      }
    };
    let data = await this.top20MnPerHhsurveyRepository.find(filter)
    return new StandardJsonResponse<Array<Top20MnPerHhsurvey>>(
      `${data.length} top food results returned.`,
      data,
    );
  }

  @get('/diet/country/topfood', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(Top20MnPerCountry))
        .toObject(),
  })
  async findTop20FoodsCountry(
    @param.query.string('countryId') countryId: string,
    @param.query.string('micronutrientId') micronutrientId: string,
    @param.query.string('compositionId') compositionId: number,
    @param.query.string('consumptionId') consumptionId: number,
    @param.query.number('ranking') ranking: number,
    @param.query.number('totalFoods') totalFoods: number
  ): Promise<object> {
    let filter: Filter = {
      where: {
        countryId: countryId,
        mnName: micronutrientId,
        fctSourceId: compositionId,
        dataSourceId: consumptionId,
        //ranking: ranking
        ranking: {'lte': totalFoods}
      }
    };
    let data = await this.top20MnPerCountryRepository.find(filter)
    return new StandardJsonResponse<Array<Top20MnPerCountry>>(
      `${data.length} top food results returned.`,
      data,
    );
  }
}
