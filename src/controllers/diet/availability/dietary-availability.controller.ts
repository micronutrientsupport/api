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
  CountryDeficiencyAfe,
  HouseholdDeficiencyAfeAggregation,
} from '../../../models';
import {
  CountryDeficiencyAfeRepository,
  HouseholdDeficiencyAfeAggregationRepository,
} from '../../../repositories';
import {toGeoJSONFeatureCollection} from '../../../utils/toGeoJSON';
import {StandardJsonResponse} from '../../standardJsonResponse';
import {StandardOpenApiResponses} from '../../standardOpenApiResponses';

// import {inject} from '@loopback/core';

export class DietaryAvailabilityController {
  constructor(
    @repository(HouseholdDeficiencyAfeAggregationRepository)
    public householdDeficiencyAfeAggregationRepository: HouseholdDeficiencyAfeAggregationRepository,
    @repository(CountryDeficiencyAfeRepository)
    public countryDeficiencyAfeRepository: CountryDeficiencyAfeRepository,
    @inject(RestBindings.Http.RESPONSE) private response: Response,
  ) {}

  @get('/diet/country/availability', {
    summary: 'Get dietary MN availability by country',
    description:
      'Get the dietary availability and prevalence of deficiency based on country level data',
    tags: ['diet'],
    produces: ['application/json', 'application/geo+json'],
    responses: new StandardOpenApiResponses(
      'Array of CountryIntake model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(CountryDeficiencyAfe))
      .toObject(true),
  })
  async findCountryIntake(
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
    const filter: Filter = {
      where: {
        countryId: countryId,
        micronutrientId: micronutrientId,
        fctSourceId: compositionDataId,
        surveyId: consumptionDataId,
      },
    };
    const data = await this.countryDeficiencyAfeRepository.find(filter);
    // // Temp insert dummy threshold values
    // if (data[0].geojson) {
    //   (data[0].geojson as any).features.forEach((feature: any) => {
    //     feature.properties.mn_threshold = 0;
    //     feature.properties.mn_threshold_unit = '%';
    //   });
    // }

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

  @get('diet/household/availability', {
    summary: 'Get dietary MN availability by household',
    description:
      'Get the dietary availability and prevalence of deficiency based on household level data, aggregated to the subregional level',
    tags: ['diet'],
    produces: ['application/json', 'application/geo+json'],
    responses: new StandardOpenApiResponses(
      'Array of HouseholdDeficiencyAfeAggregation model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(HouseholdDeficiencyAfeAggregation))
      .toObject(true),
  })
  async find(
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
    const filter: Filter = {
      where: {
        country: countryId,
        micronutrientId: micronutrientId,
        compositionDataId: compositionDataId,
        consumptionDataId: consumptionDataId,
      },
    };
    const data = await this.householdDeficiencyAfeAggregationRepository.find(
      filter,
    );

    // TODO: Fix This
    data.map(res => {
      res.geometry = JSON.parse((res as any).geometry);
      res.id = res.subregionId;
      if (res.medianSupply) {
        res.mn_absolute = Math.round(res.medianSupply * 100) / 100;
      } else {
        res.mn_absolute = 'N/A';
      }
      res.mn_absolute_unit = res.unit;
      res.mn_threshold = res.deficientPercentage;
      res.mn_threshold_unit =
        '% of sampled households (' +
        res.deficientCount +
        '/' +
        res.householdCount +
        ' )';
      res.subregion_name = res.subregionName;
      res.subregion_type = 'District';
    });

    if (acceptHeader.startsWith('application/geo+json;')) {
      const ndata = toGeoJSONFeatureCollection(data);
      this.response.set('Content-Type', 'application/geo+json');
      this.response.status(200).send(ndata);
      // Return the HTTP response object so that LoopBack framework skips the
      // generation of HTTP response
      return this.response;
    }

    return new StandardJsonResponse<Array<HouseholdDeficiencyAfeAggregation>>(
      `${data.length} dietary availability aggregations returned.`,
      data,
      'HouseholdDeficiencyAfeAggregation',
    );
  }
}
