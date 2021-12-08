// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {
  getModelSchemaRef,
  param,
  post,
  requestBody,
  Response,
  RestBindings,
} from '@loopback/rest';
import {CountryDeficiencyAfe} from '../../../models';
import {
  CountryDeficiencyAfeRepository,
  HouseholdDeficiencyAfeAggregationRepository,
  MonthlyFoodRepository,
} from '../../../repositories';
import {toGeoJSONFeatureCollection} from '../../../utils/toGeoJSON';
import {StandardJsonResponse} from '../../standardJsonResponse';
import {StandardOpenApiResponses} from '../../standardOpenApiResponses';

// import {inject} from '@loopback/core';

export class DietaryChangeScenariosController {
  constructor(
    @repository(HouseholdDeficiencyAfeAggregationRepository)
    public householdDeficiencyAfeAggregationRepository: HouseholdDeficiencyAfeAggregationRepository,
    @repository(CountryDeficiencyAfeRepository)
    public countryDeficiencyAfeRepository: CountryDeficiencyAfeRepository,
    @repository(MonthlyFoodRepository)
    public monthlyFoodRepository: MonthlyFoodRepository,
    @inject(RestBindings.Http.RESPONSE) private response: Response,
  ) {}

  @post('/diet/country/scenario/composition', {
    summary: 'Run composition scenario (country)',
    description:
      'Run a simple dietary change scenario to calculate dietary availability of a micronutrient given a composition change of certain food items',
    tags: ['diet'],
    produces: ['application/json', 'application/geo+json'],
    responses: new StandardOpenApiResponses(
      'Array of CountryIntake model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(CountryDeficiencyAfe))
      .toObject(true),
  })
  async runCompositionScenario(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            title: 'CompositionScenarioBody',
            required: [
              'consumptionDataId',
              'compositionDataId',
              'micronutrientId',
              'foodGenusIds',
              'replacementCompositionValues',
            ],
            type: 'object',
            properties: {
              consumptionDataId: {
                description:
                  'ID for the consumption data source as returned by `/diet/data-sources`',
                type: 'number',
              },
              compositionDataId: {
                description:
                  'ID for the composition data source as returned by `/diet/data-sources`',
                type: 'number',
              },
              micronutrientId: {
                description:
                  'ID for the micronutrient as returned by `/micronutrients`',
                type: 'string',
              },
              foodGenusIds: {
                description:
                  'Array of foodGenusIds as returned by `/diet/food-groups` to alter the composition of',
                type: 'array',
                items: {
                  type: 'string',
                },
                minItems: 1,
              },
              replacementCompositionValues: {
                description:
                  'Array of replacement composition values for the foodGenuses in the `foodGenusIds` array',
                type: 'array',
                items: {
                  type: 'number',
                },
                minItems: 1,
              },
            },
          },
        },
      },
    })
    body: {
      consumptionDataId: number;
      compositionDataId: number;
      micronutrientId: string;
      foodGenusIds: string[];
      replacementCompositionValues: number[];
    },
    @param.header.string('Accept', {
      description:
        'Defaults to `application/json`.  Requesting `application/geo+json` will result in the ' +
        'data being returned as a GeoJSON feature collection.  See ' +
        '[the resource page](./core-data-api/resources/standard-api-response-for-householddeficiencyafeaggregation-model#geojson-feature-collection)' +
        ' for more details',
      required: false,
      example: 'application/geo-json',
    })
    acceptHeader: string,
  ): Promise<object> {
    //console.log(foodGenusIds);

    const data = await this.countryDeficiencyAfeRepository.runCompositionScenario(
      body.compositionDataId,
      body.consumptionDataId,
      body.micronutrientId,
      body.foodGenusIds,
      body.replacementCompositionValues,
    );

    data.map(res => {
      res.geometry = JSON.parse((res as any).geometry);
    });

    if (acceptHeader.startsWith('application/geo+json;')) {
      const ndata = toGeoJSONFeatureCollection(data);
      this.response.set('Content-Type', 'application/geo+json');
      this.response.status(200).send(ndata);
      // Return the HTTP response object so that LoopBack framework skips the
      // generation of HTTP response
      return this.response;
    }

    return new StandardJsonResponse<Array<CountryDeficiencyAfe>>(
      `${data.length} top results returned.`,
      data,
      'CountryDeficiencyAfe',
    );
  }

  @post('/diet/country/scenario/consumption', {
    summary: 'Run consumption scenario (country)',
    description:
      'Run a simple dietary change scenario to calculate dietary availability of a micronutrient given a consumption change of certain food items',
    tags: ['diet'],
    produces: ['application/json', 'application/geo+json'],
    responses: new StandardOpenApiResponses(
      'Array of CountryIntake model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(CountryDeficiencyAfe))
      .toObject(true),
  })
  async runConsumptionScenario(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            title: 'CompositionScenarioBody',
            required: [
              'consumptionDataId',
              'compositionDataId',
              'micronutrientId',
              'foodGenusIds',
              'replacementConsumptionValues',
            ],
            type: 'object',
            properties: {
              consumptionDataId: {
                description:
                  'ID for the consumption data source as returned by `/diet/data-sources`',
                type: 'number',
              },
              compositionDataId: {
                description:
                  'ID for the composition data source as returned by `/diet/data-sources`',
                type: 'number',
              },
              micronutrientId: {
                description:
                  'ID for the micronutrient as returned by `/micronutrients`',
                type: 'string',
              },
              foodGenusIds: {
                description:
                  'Array of foodGenusIds as returned by `/diet/food-groups` to alter the composition of',
                type: 'array',
                items: {
                  type: 'string',
                },
                minItems: 1,
              },
              replacementConsumptionValues: {
                description:
                  'Array of replacement consumption values for the foodGenuses in the `foodGenusIds` array',
                type: 'array',
                items: {
                  type: 'number',
                },
                minItems: 1,
              },
            },
          },
        },
      },
    })
    body: {
      consumptionDataId: number;
      compositionDataId: number;
      micronutrientId: string;
      foodGenusIds: string[];
      replacementConsumptionValues: number[];
    },
    @param.header.string('Accept', {
      description:
        'Defaults to `application/json`.  Requesting `application/geo+json` will result in the ' +
        'data being returned as a GeoJSON feature collection.  See ' +
        '[the resource page](./core-data-api/resources/standard-api-response-for-householddeficiencyafeaggregation-model#geojson-feature-collection)' +
        ' for more details',
      required: false,
      example: 'application/geo-json',
    })
    acceptHeader: string,
  ): Promise<object> {
    //console.log(foodGenusIds);

    const data = await this.countryDeficiencyAfeRepository.runConsumptionScenario(
      body.compositionDataId,
      body.consumptionDataId,
      body.micronutrientId,
      body.foodGenusIds,
      body.replacementConsumptionValues,
    );

    data.map(res => {
      res.geometry = JSON.parse((res as any).geometry);
    });

    if (acceptHeader.startsWith('application/geo+json;')) {
      const ndata = toGeoJSONFeatureCollection(data);
      this.response.set('Content-Type', 'application/geo+json');
      this.response.status(200).send(ndata);
      // Return the HTTP response object so that LoopBack framework skips the
      // generation of HTTP response
      return this.response;
    }

    return new StandardJsonResponse<Array<CountryDeficiencyAfe>>(
      `${data.length} top results returned.`,
      data,
      'CountryDeficiencyAfe',
    );
  }

  @post('/diet/country/scenario/comparison', {
    summary: 'Run comparison scenario (country)',
    description:
      'Run a simple dietary change scenario to calculate dietary availability of a micronutrient given the substitution of certain consumed food items for others',
    tags: ['diet'],
    produces: ['application/json', 'application/geo+json'],
    responses: new StandardOpenApiResponses(
      'Array of CountryIntake model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(CountryDeficiencyAfe))
      .toObject(true),
  })
  async runComparisonScenario(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            title: 'CompositionScenarioBody',
            required: [
              'consumptionDataId',
              'compositionDataId',
              'micronutrientId',
              'foodGenusIds',
              'replacementFoodGenusIds',
            ],
            type: 'object',
            properties: {
              consumptionDataId: {
                description:
                  'ID for the consumption data source as returned by `/diet/data-sources`',
                type: 'number',
              },
              compositionDataId: {
                description:
                  'ID for the composition data source as returned by `/diet/data-sources`',
                type: 'number',
              },
              micronutrientId: {
                description:
                  'ID for the micronutrient as returned by `/micronutrients`',
                type: 'string',
              },
              foodGenusIds: {
                description:
                  'Array of foodGenusIds as returned by `/diet/food-groups` to alter the composition of',
                type: 'array',
                items: {
                  type: 'string',
                },
                minItems: 1,
              },
              replacementFoodGenusIds: {
                description:
                  'Array of replacement foodGenusIds  for he foodGenuses in the `foodGenusIds` array',
                type: 'array',
                items: {
                  type: 'string',
                },
                minItems: 1,
              },
            },
          },
        },
      },
    })
    body: {
      consumptionDataId: number;
      compositionDataId: number;
      micronutrientId: string;
      foodGenusIds: string[];
      replacementFoodGenusIds: string[];
    },
    @param.header.string('Accept', {
      description:
        'Defaults to `application/json`.  Requesting `application/geo+json` will result in the ' +
        'data being returned as a GeoJSON feature collection.  See ' +
        '[the resource page](./core-data-api/resources/standard-api-response-for-householddeficiencyafeaggregation-model#geojson-feature-collection)' +
        ' for more details',
      required: false,
      example: 'application/geo-json',
    })
    acceptHeader: string,
  ): Promise<object> {
    //console.log(foodGenusIds);

    const data = await this.countryDeficiencyAfeRepository.runComparisonScenario(
      body.compositionDataId,
      body.consumptionDataId,
      body.micronutrientId,
      body.foodGenusIds,
      body.replacementFoodGenusIds,
    );

    data.map(res => {
      res.geometry = JSON.parse((res as any).geometry);
    });

    if (acceptHeader.startsWith('application/geo+json;')) {
      const ndata = toGeoJSONFeatureCollection(data);
      this.response.set('Content-Type', 'application/geo+json');
      this.response.status(200).send(ndata);
      // Return the HTTP response object so that LoopBack framework skips the
      // generation of HTTP response
      return this.response;
    }

    return new StandardJsonResponse<Array<CountryDeficiencyAfe>>(
      `${data.length} top results returned.`,
      data,
      'CountryDeficiencyAfe',
    );
  }
}
