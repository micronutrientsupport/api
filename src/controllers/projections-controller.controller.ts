// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {ImpactCommodityAggregation, ImpactFoodGroupAggregation, ImpactSummary, ImpactTotalFoodAvailability} from '../models';
import {ImpactCommodityAggregationRepository, ImpactFoodGroupAggregationRepository, ImpactSummaryRepository, ImpactTotalFoodAvailabilityRepository} from '../repositories';
import {StandardJsonResponse} from './standardJsonResponse';
import {StandardOpenApiResponses} from './standardOpenApiResponses';

// import {inject} from '@loopback/core';


export class ProjectionsControllerController {
  constructor(
    @repository(ImpactTotalFoodAvailabilityRepository)
    public impactTotalFoodAvailabilityRepository: ImpactTotalFoodAvailabilityRepository,
    @repository(ImpactSummaryRepository)
    public impactSummaryRepository: ImpactSummaryRepository,
    @repository(ImpactCommodityAggregationRepository)
    public impactCommodityAggregationRepository: ImpactCommodityAggregationRepository,
    @repository(ImpactFoodGroupAggregationRepository)
    public impactFoodGroupAggregationRepository: ImpactFoodGroupAggregationRepository,
  ) { }

  @get('/projections/total/{countryId}/{micronutrientId}', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(ImpactTotalFoodAvailability))
        .toObject(),
  })
  async findTotal(
    @param.path.string('countryId') countryId: string,
    @param.path.string('micronutrientId') micronutrientId: string): Promise<object> {
    let filter: Filter = {
      where: {
        country: countryId,
      },
      fields: {
        scenario: true,
        year: true,
      }
    };

    (filter as any).fields[micronutrientId] = true;
    (filter as any).fields[micronutrientId + 'Diff'] = true;

    let data = await this.impactTotalFoodAvailabilityRepository.find(filter)

    let outdata = data.map(val => {
      return {
        scenario: val.scenario,
        year: val.year,
        availability: val[micronutrientId],
        difference: val[micronutrientId + 'Diff']
      }
    })

    return new StandardJsonResponse<Array<ImpactTotalFoodAvailability>>(
      `${data.length} impact results returned.`,
      outdata as any,
    );
  }

  @get('/projections/summary/{countryId}/{micronutrientId}/{scenarioId}', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(ImpactSummary))
        .toObject(),
  })
  async findSummary(
    @param.path.string('countryId') countryId: string,
    @param.path.string('micronutrientId') micronutrientId: string,
    @param.path.string('scenarioId') scenarioId: string): Promise<object> {
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

  @get('/projections/commodity/{countryId}/{micronutrientId}', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(ImpactCommodityAggregation))
        .toObject(),
  })
  async findCommodity(
    @param.path.string('countryId') countryId: string,
    @param.path.string('micronutrientId') micronutrientId: string): Promise<object> {
    let filter: Filter = {
      where: {
        country: countryId,
        nutrient: micronutrientId,
      }
    };
    let data = await this.impactCommodityAggregationRepository.find(filter)
    return new StandardJsonResponse<Array<ImpactCommodityAggregation>>(
      `${data.length} impact results returned.`,
      data,
    );
  }

  @get('/projections/commodity/{countryId}/{micronutrientId}/{scenarioId}', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(ImpactCommodityAggregation))
        .toObject(),
  })
  async findCommodityScenario(
    @param.path.string('countryId') countryId: string,
    @param.path.string('micronutrientId') micronutrientId: string,
    @param.path.string('scenarioId') scenarioId: string): Promise<object> {
    let filter: Filter = {
      where: {
        country: countryId,
        nutrient: micronutrientId,
        scenario: scenarioId
      }
    };
    let data = await this.impactCommodityAggregationRepository.find(filter)
    return new StandardJsonResponse<Array<ImpactCommodityAggregation>>(
      `${data.length} impact results returned.`,
      data,
    );
  }

  @get('/projections/food-group/{countryId}/{micronutrientId}', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(ImpactFoodGroupAggregation))
        .toObject(),
  })
  async findFoodGroup(
    @param.path.string('countryId') countryId: string,
    @param.path.string('micronutrientId') micronutrientId: string): Promise<object> {
    let filter: Filter = {
      where: {
        country: countryId,
        nutrient: micronutrientId,
      }
    };
    let data = await this.impactFoodGroupAggregationRepository.find(filter)
    return new StandardJsonResponse<Array<ImpactFoodGroupAggregation>>(
      `${data.length} impact results returned.`,
      data,
    );
  }

  @get('/projections/food-group/{countryId}/{micronutrientId}/{scenarioId}', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(ImpactFoodGroupAggregation))
        .toObject(),
  })
  async findFoodGroupScenario(
    @param.path.string('countryId') countryId: string,
    @param.path.string('micronutrientId') micronutrientId: string,
    @param.path.string('scenarioId') scenarioId: string): Promise<object> {
    let filter: Filter = {
      where: {
        country: countryId,
        nutrient: micronutrientId,
        scenario: scenarioId
      }
    };
    let data = await this.impactFoodGroupAggregationRepository.find(filter)
    return new StandardJsonResponse<Array<ImpactFoodGroupAggregation>>(
      `${data.length} impact results returned.`,
      data,
    );
  }
}
