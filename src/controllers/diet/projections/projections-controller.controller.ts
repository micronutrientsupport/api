// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {ImpactCommodityAggregation, ImpactFoodGroupAggregation, ImpactSummary, ImpactTotalFoodAvailability} from '../../../models';
import {ImpactCommodityAggregationRepository, ImpactFoodGroupAggregationRepository, ImpactScenarioRepository, ImpactSummaryRepository, ImpactTotalFoodAvailabilityRepository} from '../../../repositories';
import {StandardJsonResponse} from '../../standardJsonResponse';
import {StandardOpenApiResponses} from '../../standardOpenApiResponses';

// import {inject} from '@loopback/core';


export class ProjectionsControllerController {
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
  ) { }

  @get('/diet/projection/total', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(ImpactTotalFoodAvailability))
        .toObject(),
  })
  async findTotal(
    @param.query.string('countryId') countryId: string,
    @param.query.string('micronutrientId') micronutrientId: string,
    @param.query.string('scenarioId') scenarioId: string,
    @param.query.string('year') year: number): Promise<object> {
    let filter: Filter = {
      where: {
        country: countryId,
        year: year,
        scenario: scenarioId
      }
    };

    if (micronutrientId) {
      filter.fields = {
        country: true,
        scenario: true,
        year: true
      };
      (filter as any).fields[micronutrientId] = true;
      (filter as any).fields[micronutrientId + 'Diff'] = true;
    }

    let data = await this.impactTotalFoodAvailabilityRepository.find(filter)
    return new StandardJsonResponse<Array<ImpactTotalFoodAvailability>>(
      `${data.length} impact results returned.`,
      data as any,
    );
  }

  @get('/diet/projection/summary', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(ImpactSummary))
        .toObject(),
  })
  async findSummary(
    @param.query.string('countryId') countryId: string,
    @param.query.string('micronutrientId') micronutrientId: string,
    @param.query.string('scenarioId') scenarioId: string): Promise<object> {
    let filter: Filter = {
      where: {
        country: countryId,
        micronutrient: micronutrientId,
        scenario: scenarioId
      }
    };
    let data = await this.impactSummaryRepository.find(filter)
    return new StandardJsonResponse<Array<ImpactSummary>>(
      `${data.length} impact results returned.`,
      data,
    );
  }

  @get('/diet/projection/commodity', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(ImpactCommodityAggregation))
        .toObject(),
  })
  async findCommodity(
    @param.query.string('countryId') countryId: string,
    @param.query.string('micronutrientId') micronutrientId: string,
    @param.query.string('scenarioId') scenarioId: string,
    @param.query.string('year') year: number): Promise<object> {
    let filter: Filter = {
      where: {
        country: countryId,
        nutrient: micronutrientId,
        scenario: scenarioId,
        year: year
      }
    };
    let data = await this.impactCommodityAggregationRepository.find(filter)
    return new StandardJsonResponse<Array<ImpactCommodityAggregation>>(
      `${data.length} impact results returned.`,
      data,
    );
  }

  @get('/diet/projection/food-group', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(ImpactFoodGroupAggregation))
        .toObject(),
  })
  async findFoodGroup(
    @param.query.string('countryId') countryId: string,
    @param.query.string('micronutrientId') micronutrientId: string,
    @param.query.string('scenarioId') scenarioId: string,
    @param.query.string('year') year: number): Promise<object> {
    let filter: Filter = {
      where: {
        country: countryId,
        nutrient: micronutrientId,
        scenario: scenarioId,
        year: year
      }
    };
    let data = await this.impactFoodGroupAggregationRepository.find(filter)
    return new StandardJsonResponse<Array<ImpactFoodGroupAggregation>>(
      `${data.length} impact results returned.`,
      data,
    );
  }

  @get('/diet/projection/scenario', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(ImpactFoodGroupAggregation))
        .toObject(),
  })
  async findScenarios(
    @param.query.string('scenarioId') scenarioId: string,
    @param.query.boolean('isBaseline') isBaseline: boolean
  ): Promise<object> {
    let filter: Filter = {
      where: {
        id: scenarioId,
        isBaseline: isBaseline
      }
    };
    let data = await this.impactScenarioRepository.find(filter)
    return new StandardJsonResponse<Array<ImpactFoodGroupAggregation>>(
      `${data.length} impact results returned.`,
      data,
    );
  }

}
