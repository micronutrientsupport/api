// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {
  Response,
  RestBindings,
  get,
  getModelSchemaRef,
  param,
} from '@loopback/rest';
import {
  CountryDeficiencyAfe,
  HouseholdDeficiencyAfeAggregation,
  MonthlyFood,
} from '../../../models';
import {
  CountryDeficiencyAfeRepository,
  HouseholdDeficiencyAfeAggregationRepository,
  MnBinRangeRepository,
  MonthlyFoodRepository,
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
    @repository(MonthlyFoodRepository)
    public monthlyFoodRepository: MonthlyFoodRepository,
    @repository(MnBinRangeRepository)
    public mnBinRangeRepository: MnBinRangeRepository,
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
        micronutrientId: micronutrientId,
        compositionDataId: compositionDataId,
        consumptionDataId: consumptionDataId,
      },
    };
    const data = await this.countryDeficiencyAfeRepository.find(filter);

    data.map(res => {
      res.geometry = JSON.parse((res as any).geometry);
    });

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

    const binFilter: Filter = {
      where: {
        micronutrientId: micronutrientId,
      },
    };
    const bins = (await this.mnBinRangeRepository.find(binFilter))[0];
    const meta: {bins?: {desc: string; data: number[]}} = {};
    if (bins) {
      const binsMeta = {
        desc:
          'Reccomended bin ranges for consistent display of data across nations',
        data: [
          parseFloat(`${bins.bin0}`),
          parseFloat(`${bins.bin1}`),
          parseFloat(`${bins.bin2}`),
          parseFloat(`${bins.bin3}`),
          parseFloat(`${bins.bin4}`),
          parseFloat(`${bins.bin5}`),
        ],
      };
      meta.bins = binsMeta;
    }
    return new StandardJsonResponse<Array<CountryDeficiencyAfe>>(
      `${data.length} top results returned.`,
      data,
      'CountryDeficiencyAfe',
      undefined,
      undefined,
      meta,
    );
  }

  @get('diet/household/monthly', {
    summary: 'Get dietary MN by calendar month',
    description:
      'Get the dietary availability based on household level data, aggregated to the calendar month',
    tags: ['diet'],
    responses: new StandardOpenApiResponses(
      'Array of MonthlyFood model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(MonthlyFood))
      .toObject(true),
  })
  async getMonthly(
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
        micronutrientId: micronutrientId,
        // compositionDataId: compositionDataId,
        consumptionDataId: consumptionDataId,
      },
    };
    const data = await this.monthlyFoodRepository.find(filter);

    return new StandardJsonResponse<Array<MonthlyFood>>(
      `${data.length} monthly food breakdowns returned.`,
      data,
      'MonthlyFood',
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
    @param.query.string('micronutrientId', {
      description: 'ID for the micronutrient as returned by `/micronutrients`',
      required: false,
      example: 'Ca',
    })
    micronutrientId: string,
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
        micronutrientId: micronutrientId,
        consumptionDataId: consumptionDataId,
        aggregationAreaType: 'admin',
      },
    };
    const data = await this.householdDeficiencyAfeAggregationRepository.find(
      filter,
    );

    // TODO: Fix This
    data.map(res => {
      res.geometry = JSON.parse((res as any).geometry);
      //   res.id = res.subregionId;
      //   if (res.medianSupply) {
      //     res.mn_absolute = Math.round(res.medianSupply * 100) / 100;
      //   } else {
      //     res.mn_absolute = 'N/A';
      //   }
      //   res.mn_absolute_unit = res.unit;
      //   res.mn_threshold = res.deficientPercentage;
      //   res.mn_threshold_unit =
      //     '% of sampled households (' +
      //     res.deficientCount +
      //     '/' +
      //     res.householdCount +
      //     ' )';
      //   res.subregion_name = res.subregionName;
      //   res.subregion_type = 'District';
    });

    if (acceptHeader.startsWith('application/geo+json;')) {
      const ndata = toGeoJSONFeatureCollection(data);
      this.response.set('Content-Type', 'application/geo+json');
      this.response.status(200).send(ndata);
      // Return the HTTP response object so that LoopBack framework skips the
      // generation of HTTP response
      return this.response;
    }

    const binFilter: Filter = {
      where: {
        micronutrientId: micronutrientId,
      },
    };
    const bins = (await this.mnBinRangeRepository.find(binFilter))[0];
    const meta: {bins?: {desc: string; data: number[]}} = {};
    if (bins) {
      const binsMeta = {
        desc:
          'Reccomended bin ranges for consistent display of data across nations',
        data: [
          parseFloat(`${bins.bin0}`),
          parseFloat(`${bins.bin1}`),
          parseFloat(`${bins.bin2}`),
          parseFloat(`${bins.bin3}`),
          parseFloat(`${bins.bin4}`),
          parseFloat(`${bins.bin5}`),
        ],
      };
      meta.bins = binsMeta;
    }

    return new StandardJsonResponse<Array<HouseholdDeficiencyAfeAggregation>>(
      `${data.length} dietary availability aggregations returned.`,
      data,
      'HouseholdDeficiencyAfeAggregation',
      undefined,
      undefined,
      meta,
    );
  }
}
