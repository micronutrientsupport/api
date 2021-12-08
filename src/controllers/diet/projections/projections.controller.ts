// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {
  ImpactCommodityAggregation,
  ImpactFoodGroupAggregation,
  ImpactScenario,
  ImpactSummary,
  ImpactTotalFoodAvailability,
} from '../../../models';
import {
  ImpactCommodityAggregationRepository,
  ImpactFoodGroupAggregationRepository,
  ImpactScenarioRepository,
  ImpactSummaryRepository,
  ImpactTotalFoodAvailabilityRepository,
} from '../../../repositories';
import {StandardJsonResponse} from '../../standardJsonResponse';
import {StandardOpenApiResponses} from '../../standardOpenApiResponses';

// import {inject} from '@loopback/core';

export class ProjectionsController {
  constructor(
    @repository(ImpactScenarioRepository)
    public impactScenarioRepository: ImpactScenarioRepository,
    @repository(ImpactTotalFoodAvailabilityRepository)
    public impactTotalFoodAvailabilityRepository: ImpactTotalFoodAvailabilityRepository,
    @repository(ImpactSummaryRepository)
    public impactSummaryRepository: ImpactSummaryRepository,
    @repository(ImpactCommodityAggregationRepository)
    public impactCommodityAggregationRepository: ImpactCommodityAggregationRepository,
    @repository(ImpactFoodGroupAggregationRepository)
    public impactFoodGroupAggregationRepository: ImpactFoodGroupAggregationRepository,
  ) {}

  @get('/diet/projections/totals', {
    summary: 'Get total micronutrient availability',
    description:
      'Get the projected total micronutrient availability under various scenarios and years',
    tags: ['projections'],
    responses: new StandardOpenApiResponses(
      'Array of ImpactTotalFoodAvailability model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(ImpactTotalFoodAvailability))
      .toObject(),
  })
  async getTotalMicronutrientAvailability(
    @param.query.string('countryId', {
      description:
        'ISO 3166-1 alpha-3 code for the country as returned by `/countries`',
      required: false,
      example: 'MWI',
    })
    countryId: string,
    @param.query.string('micronutrientId', {
      description: 'ID for the micronutrient as returned by `/micronutrients`',
      required: false,
      example: 'Ca',
    })
    micronutrientId: string,
    @param.query.string('scenarioId', {
      description:
        'ID for the projection scenario as returned by `/projections/scenarios`',
      required: false,
      example: 'SSP2',
    })
    scenarioId: string,
    @param.query.string('year', {
      description:
        'The model year to return data for in YYYY format.  5 year increments between 2010 and 2050',
      required: false,
      example: '2025',
    })
    year: number,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        country: countryId,
        year: year,
        scenario: scenarioId,
      },
    };

    if (micronutrientId) {
      filter.fields = {
        country: true,
        scenario: true,
        year: true,
      };
      (filter as any).fields[micronutrientId] = true;
      (filter as any).fields[micronutrientId + 'Diff'] = true;
    }

    const data = await this.impactTotalFoodAvailabilityRepository.find(filter);
    return new StandardJsonResponse<Array<ImpactTotalFoodAvailability>>(
      `${data.length} total micronutrient availability results returned.`,
      data,
      'ImpactTotalFoodAvailability',
    );
  }

  @get('/diet/projections/summaries', {
    summary: 'Get projection summaries',
    description:
      'Get headline summary values for projected dietary supply of micronutrients',
    tags: ['projections'],
    responses: new StandardOpenApiResponses(
      'Array of ImpactSummary model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(ImpactSummary))
      .toObject(),
  })
  async getProjectionSummaries(
    @param.query.string('countryId', {
      description:
        'ISO 3166-1 alpha-3 code for the country as returned by `/countries`',
      required: false,
      example: 'MWI',
    })
    countryId: string,
    @param.query.string('micronutrientId', {
      description: 'ID for the micronutrient as returned by `/micronutrients`',
      required: false,
      example: 'Ca',
    })
    micronutrientId: string,
    @param.query.string('scenarioId', {
      description:
        'ID for the projection scenario as returned by `/projections/scenarios`',
      required: false,
      example: 'SSP2',
    })
    scenarioId: string,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        country: countryId,
        micronutrient: micronutrientId,
        scenario: scenarioId,
      },
    };
    const data = await this.impactSummaryRepository.find(filter);
    return new StandardJsonResponse<Array<ImpactSummary>>(
      `${data.length} projection summaries returned.`,
      data,
      'ImpactSummary',
    );
  }

  @get('/diet/projections/commodities', {
    summary: 'Get micronutrient breakdown by commodity',
    description:
      'Get the top 5 (plus other) commodities which contribute to the projected dietary supply of a micronutrient',
    tags: ['projections'],
    responses: new StandardOpenApiResponses(
      'Array of ImpactCommodityAggregation model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(ImpactCommodityAggregation))
      .toObject(),
  })
  async getMicronutrientBreakdownByCommodity(
    @param.query.string('countryId', {
      description:
        'ISO 3166-1 alpha-3 code for the country as returned by `/countries`',
      required: false,
      example: 'MWI',
    })
    countryId: string,
    @param.query.string('micronutrientId', {
      description: 'ID for the micronutrient as returned by `/micronutrients`',
      required: false,
      example: 'Ca',
    })
    micronutrientId: string,
    @param.query.string('scenarioId', {
      description:
        'ID for the projection scenario as returned by `/projections/scenarios`',
      required: false,
      example: 'SSP2',
    })
    scenarioId: string,
    @param.query.string('year', {
      description:
        'The model year to return data for in YYYY format.  5 year increments between 2010 and 2050',
      required: false,
      example: '2025',
    })
    year: number,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        country: countryId,
        nutrient: micronutrientId,
        scenario: scenarioId,
        year: year,
      },
    };
    const data = await this.impactCommodityAggregationRepository.find(filter);
    return new StandardJsonResponse<Array<ImpactCommodityAggregation>>(
      `${data.length} commodity breakdowns returned.`,
      data,
      'ImpactCommodityAggregation',
    );
  }

  @get('/diet/projections/food-groups', {
    summary: 'Get micronutrient breakdown by food group',
    description:
      'Get the top 5 (plus other) food groups which contribute to the projected dietary supply of a micronutrient',
    tags: ['projections'],
    responses: new StandardOpenApiResponses(
      'Array of ImpactFoodGroupAggregation model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(ImpactFoodGroupAggregation))
      .toObject(),
  })
  async getMicronutrientBreakdownByFoodGroup(
    @param.query.string('countryId', {
      description:
        'ISO 3166-1 alpha-3 code for the country as returned by `/countries`',
      required: false,
      example: 'MWI',
    })
    countryId: string,
    @param.query.string('micronutrientId', {
      description: 'ID for the micronutrient as returned by `/micronutrients`',
      required: false,
      example: 'Ca',
    })
    micronutrientId: string,
    @param.query.string('scenarioId', {
      description:
        'ID for the projection scenario as returned by `/projections/scenarios`',
      required: false,
      example: 'SSP2',
    })
    scenarioId: string,
    @param.query.string('year', {
      description:
        'The model year to return data for in YYYY format.  5 year increments between 2010 and 2050',
      required: false,
      example: '2025',
    })
    year: number,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        country: countryId,
        nutrient: micronutrientId,
        scenario: scenarioId,
        year: year,
      },
    };
    const data = await this.impactFoodGroupAggregationRepository.find(filter);
    return new StandardJsonResponse<Array<ImpactFoodGroupAggregation>>(
      `${data.length} food group breakdowns returned.`,
      data,
      'ImpactFoodGroupAggregation',
    );
  }

  @get('/diet/projections/scenarios', {
    summary: 'Get projection scenarios',
    description:
      'Get details of the different scenarios used for projecting future dietary supply',
    tags: ['projections'],
    responses: new StandardOpenApiResponses(
      'Array of ImpactScenario model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(ImpactScenario))
      .toObject(),
  })
  async getProjectionScenarios(
    @param.query.string('scenarioId', {
      description: 'Unique ID for the scenario',
      required: false,
      example: 'SSP2',
    })
    scenarioId: string,
    @param.query.boolean('isBaseline', {
      description: 'Only display sceanrios used as a baseline for comparison?',
      required: false,
      example: true,
    })
    isBaseline: boolean,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        id: scenarioId,
        isBaseline: isBaseline,
      },
    };
    const data = await this.impactScenarioRepository.find(filter);
    return new StandardJsonResponse<Array<ImpactScenario>>(
      `${data.length} projection scenarios returned.`,
      data,
      'ImpactScenario',
    );
  }
}
