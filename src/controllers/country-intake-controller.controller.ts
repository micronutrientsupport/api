// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {CountryIntake, CountryIntakeGeojson, SubregionIntakeGeojson} from '../models';
import {CountryIntakeGeojsonRepository, CountryIntakeRepository, SubregionIntakeGeojsonRepository} from '../repositories';
import {StandardJsonResponse} from './standardJsonResponse';
import {StandardOpenApiResponses} from './standardOpenApiResponses';

// import {inject} from '@loopback/core';


export class CountryIntakeControllerController {
  constructor(
    @repository(CountryIntakeGeojsonRepository)
    public countryIntakeGeojsonRepository: CountryIntakeGeojsonRepository,
    @repository(CountryIntakeRepository)
    public countryIntakeRepository: CountryIntakeRepository,
    @repository(SubregionIntakeGeojsonRepository)
    public subregionIntakeGeojsonRepository: SubregionIntakeGeojsonRepository
  ) { }


  @get('/diet/country/geojson/{countryId}/{micronutrientId}/{compositionId}/{consumptionId}', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(CountryIntakeGeojson))
        .toObject(),
  })
  async findCountryIntakeGeojson(
    @param.path.string('countryId') countryId: string,
    @param.path.string('micronutrientId') micronutrientId: string,
    @param.path.string('compositionId') compositionId: number,
    @param.path.string('consumptionId') consumptionId: number): Promise<object> {
    let filter: Filter = {
      where: {
        countryId: countryId,
        mnName: micronutrientId,
        fctSourceId: compositionId,
        dataSourceId: consumptionId
      }
    };
    let data = await this.countryIntakeGeojsonRepository.find(filter)
    // Temp insert dummy threshold values
    if (data[0].geojson) {
      (data[0].geojson as any).features.forEach((feature: any) => {
        console.log(feature.properties);
        feature.properties.mn_threshold = 0;
        feature.properties.mn_threshold_unit = '%';
      })
    }
    return new StandardJsonResponse<Array<CountryIntakeGeojson>>(
      `${data.length} top results returned.`,
      data,
    );
  }

  @get('/diet/household/geojson/{countryId}/{micronutrientId}/{compositionId}/{consumptionId}', {
    responses:
      new StandardOpenApiResponses('Data sources')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(SubregionIntakeGeojson))
        .toObject(),
  })
  async findSubregionIntakeGeojson(
    @param.path.string('countryId') countryId: string,
    @param.path.string('micronutrientId') micronutrientId: string,
    @param.path.string('compositionId') compositionId: number,
    @param.path.string('consumptionId') consumptionId: number): Promise<object> {
    let filter: Filter = {
      where: {
        countryId: countryId,
        mnName: micronutrientId,
        //  fctSourceId: compositionId,
        //  dataSourceId: consumptionId
      }
    };
    let data = await this.subregionIntakeGeojsonRepository.find(filter)
    // Temp insert dummy threshold values
    // if (data[0].geojson) {
    //   (data[0].geojson as any).features.forEach((feature: any) => {
    //     console.log(feature.properties);
    //     feature.properties.mn_threshold = 0;
    //     feature.properties.mn_threshold_unit = '%';
    //   })
    // }
    return new StandardJsonResponse<Array<CountryIntakeGeojson>>(
      `${data.length} top results returned.`,
      data,
    );
  }

  @get('/diet/scenario/composition', {
    responses: {
      '200': {
        description: 'Array of CountryIntake model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CountryIntake, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async findScenario(
    @param({name: 'countryId', in: 'query', required: true}) countryId: string,
    @param({name: 'micronutrientId', in: 'query', required: true}) micronutrientId: string,
    @param({name: 'fooditemId', in: 'query', required: true}) fooditemId: string,
    @param({name: 'compositionId', in: 'query', required: true}) compositionId: number,
    @param({name: 'newValue', in: 'query', required: true}) newValue: number,
    @param.filter(CountryIntake) filter?: Filter<CountryIntake>,
  ): Promise<object> {
    let data = await this.countryIntakeRepository.runCompositionScenario(countryId, compositionId, fooditemId, micronutrientId, newValue);
    return new StandardJsonResponse<Array<CountryIntake>>(
      `${data.length} top results returned.`,
      data,
    );
  }

}
