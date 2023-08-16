// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Top20MnPerCountry, Top20MnPerHhsurvey} from '../../../models';
import {
  Top20MnPerCountryRepository,
  Top20MnPerHhsurveyRepository,
} from '../../../repositories';
import {StandardJsonResponse} from '../../standardJsonResponse';
import {StandardOpenApiResponses} from '../../standardOpenApiResponses';

// import {inject} from '@loopback/core';

export class TopFoodsController {
  constructor(
    @repository(Top20MnPerCountryRepository)
    public top20MnPerCountryRepository: Top20MnPerCountryRepository,
    @repository(Top20MnPerHhsurveyRepository)
    public top20MnPerHhsurveyRepository: Top20MnPerHhsurveyRepository,
  ) {}

  @get('/diet/household/top-foods', {
    summary: 'Get the top contributing food items (household level)',
    description:
      'Get the top fooditems contributing to the micronutrient intake for a given nation based on Household level consumption data',
    tags: ['diet'],
    responses: new StandardOpenApiResponses(
      'Array of Top20MnPerHhsurvey model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(Top20MnPerHhsurvey))
      .toObject(),
  })
  async findTop20FoodsHousehold(
    @param.query.string('micronutrientId', {
      description: 'ID for the micronutrient as returned by `/micronutrients`',
      required: false,
      example: 'Ca',
    })
    micronutrientId: string,
    @param.query.string('compositionDataId', {
      description:
        'ID for the composition data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    compositionDataId: number,
    @param.query.string('consumptionDataId', {
      description:
        'ID for the country level consumption data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    consumptionDataId: number,
    @param.query.number('totalFoods', {
      description:
        'Number of food items to return from the greatest contributor down.  Between 1 and 20 (defaults to 20)',
      required: false,
      example: '10',
    })
    totalFoods: number,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        micronutrientId: micronutrientId,
        // compositionDataId: compositionDataId,
        consumptionDataId: consumptionDataId,
        ranking: {lte: totalFoods ? totalFoods : 20},
      },
    };
    const data = await this.top20MnPerHhsurveyRepository.find(filter);
    return new StandardJsonResponse<Array<Top20MnPerHhsurvey>>(
      `${data.length} top food results returned.`,
      data,
      'Top20MnPerHhsurvey',
    );
  }

  @get('/diet/country/top-foods', {
    summary: 'Get the top contributing food items (country level)',
    description:
      'Get the top fooditems contributing to the micronutrient intake for a given nation based on Country level consumption data',
    tags: ['diet'],
    responses: new StandardOpenApiResponses(
      'Array of Top20MnPerCountry model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(Top20MnPerCountry))
      .toObject(),
  })
  async findTop20FoodsCountry(
    @param.query.string('micronutrientId', {
      description: 'ID for the micronutrient as returned by `/micronutrients`',
      required: false,
      example: 'Ca',
    })
    micronutrientId: string,
    @param.query.string('compositionDataId', {
      description:
        'ID for the composition data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    compositionDataId: number,
    @param.query.string('consumptionDataId', {
      description:
        'ID for the country level consumption data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    consumptionDataId: number,
    @param.query.number('totalFoods', {
      description:
        'Number of food items to return from the greatest contributor down.  Between 1 and 20 (defaults to 20)',
      required: false,
      example: '10',
    })
    totalFoods: number,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        micronutrientId: micronutrientId,
        compositionDataId: compositionDataId,
        consumptionDataId: consumptionDataId,
        ranking: {lte: totalFoods ? totalFoods : 20},
      },
    };
    const data = await this.top20MnPerCountryRepository.find(filter);
    return new StandardJsonResponse<Array<Top20MnPerCountry>>(
      `${data.length} top food results returned.`,
      data,
      'Top20MnPerCountry',
    );
  }
}
