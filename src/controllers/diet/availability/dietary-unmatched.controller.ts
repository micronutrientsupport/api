// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  Response,
  RestBindings,
} from '@loopback/rest';
import {
  CountryUnmatchedItems,
  CountryUnmatchedTotals,
  HouseholdUnmatchedItems,
  HouseholdUnmatchedTotals,
} from '../../../models';
import {
  CountryUnmatchedItemsRepository,
  CountryUnmatchedTotalsRepository,
  HouseholdUnmatchedItemsRepository,
  HouseholdUnmatchedTotalsRepository,
} from '../../../repositories';
import {StandardJsonResponse} from '../../standardJsonResponse';
import {StandardOpenApiResponses} from '../../standardOpenApiResponses';

// import {inject} from '@loopback/core';

export class DietaryUnmatchedController {
  constructor(
    @repository(CountryUnmatchedItemsRepository)
    public countryUnmatchedItemsRepository: CountryUnmatchedItemsRepository,
    @repository(CountryUnmatchedTotalsRepository)
    public countryUnmatchedTotalsRepository: CountryUnmatchedTotalsRepository,
    @repository(HouseholdUnmatchedItemsRepository)
    public householdUnmatchedItemsRepository: HouseholdUnmatchedItemsRepository,
    @repository(HouseholdUnmatchedTotalsRepository)
    public householdUnmatchedTotalsRepository: HouseholdUnmatchedTotalsRepository,
    @inject(RestBindings.Http.RESPONSE) private response: Response,
  ) {}

  @get('/diet/country/unmatched', {
    summary: 'Get unmatched consumption data by country',
    description:
      'Get the consumption data food genuses not matched by the compsosition data',
    tags: ['diet'],
    responses: new StandardOpenApiResponses(
      'Array of CountryUnmatchedItems model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(CountryUnmatchedItems))
      .toObject(true),
  })
  async findCountryUnmatched(
    @param.query.string('compositionDataId', {
      description:
        'ID for the composition data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    compositionDataId: number,
    @param.query.string('consumptionDataId', {
      description:
        'ID for the household level consumption data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    consumptionDataId: number,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        compositionDataId: compositionDataId,
        consumptionDataId: consumptionDataId,
      },
    };
    const data = await this.countryUnmatchedItemsRepository.find(filter);

    return new StandardJsonResponse<Array<CountryUnmatchedItems>>(
      `${data.length} top results returned.`,
      data,
      'CountryUnmatchedItems',
    );
  }

  @get('/diet/country/unmatched-totals', {
    summary: 'Get unmatched consumption data summary by country',
    description:
      'Get the consumption data food genuses not matched by the compsosition data',
    tags: ['diet'],
    responses: new StandardOpenApiResponses(
      'Array of CountryUnmatchedTotals model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(CountryUnmatchedTotals))
      .toObject(true),
  })
  async findCountryUnmatchedTotals(
    @param.query.string('compositionDataId', {
      description:
        'ID for the composition data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    compositionDataId: number,
    @param.query.string('consumptionDataId', {
      description:
        'ID for the household level consumption data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    consumptionDataId: number,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        compositionDataId: compositionDataId,
        consumptionDataId: consumptionDataId,
      },
    };
    const data = await this.countryUnmatchedTotalsRepository.find(filter);

    return new StandardJsonResponse<Array<CountryUnmatchedTotals>>(
      `${data.length} top results returned.`,
      data,
      'CountryUnmatchedTotals',
    );
  }

  @get('/diet/household/unmatched', {
    summary: 'Get unmatched consumption data by household',
    description:
      'Get the consumption data food genuses not matched by the compsosition data',
    tags: ['diet'],
    responses: new StandardOpenApiResponses(
      'Array of HouseholdUnmatchedItems model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(HouseholdUnmatchedItems))
      .toObject(true),
  })
  async findHouseholdUnmatched(
    @param.query.string('compositionDataId', {
      description:
        'ID for the composition data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    compositionDataId: number,
    @param.query.string('consumptionDataId', {
      description:
        'ID for the household level consumption data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    consumptionDataId: number,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        compositionDataId: compositionDataId,
        consumptionDataId: consumptionDataId,
      },
    };
    const data = await this.householdUnmatchedItemsRepository.find(filter);

    return new StandardJsonResponse<Array<HouseholdUnmatchedItems>>(
      `${data.length} top results returned.`,
      data,
      'HouseholdUnmatchedItems',
    );
  }

  @get('/diet/household/unmatched-totals', {
    summary: 'Get unmatched consumption data summary by household',
    description:
      'Get the consumption data food genuses not matched by the compsosition data',
    tags: ['diet'],
    responses: new StandardOpenApiResponses(
      'Array of HouseholdUnmatchedTotals model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(HouseholdUnmatchedTotals))
      .toObject(true),
  })
  async findHouseholdUnmatchedTotals(
    @param.query.string('compositionDataId', {
      description:
        'ID for the composition data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    compositionDataId: number,
    @param.query.string('consumptionDataId', {
      description:
        'ID for the household level consumption data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    consumptionDataId: number,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        compositionDataId: compositionDataId,
        consumptionDataId: consumptionDataId,
      },
    };
    const data = await this.householdUnmatchedTotalsRepository.find(filter);

    return new StandardJsonResponse<Array<HouseholdUnmatchedTotals>>(
      `${data.length} top results returned.`,
      data,
      'HouseholdUnmatchedTotals',
    );
  }
}
