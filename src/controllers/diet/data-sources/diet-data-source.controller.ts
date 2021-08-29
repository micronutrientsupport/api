// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {DietDataSources} from '../../../models';
import {DietDataSourcesRepository} from '../../../repositories';
import {StandardJsonResponse} from '../../standardJsonResponse';
import {StandardOpenApiResponses} from '../../standardOpenApiResponses';

// import {inject} from '@loopback/core';

export class DietDataSourceController {
  constructor(
    @repository(DietDataSourcesRepository)
    public dietDataSourcesRepository: DietDataSourcesRepository,
  ) {}

  @get('diet/data-sources', {
    summary: 'Get diet data sources by country',
    description:
      'Get the IDs for the _best_ data sources for use in subsequent requests',
    tags: ['diet'],
    responses: new StandardOpenApiResponses(
      'Array of DietDataSources model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(DietDataSources))
      .toObject(),
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
  ): Promise<object> {
    const filter: Filter = {
      where: {
        countryId: countryId,
        micronutrientId: micronutrientId,
      },
    };
    const data = await this.dietDataSourcesRepository.find(filter);
    return new StandardJsonResponse<Array<DietDataSources>>(
      `${data.length} diet data sources returned.`,
      data,
      'DietDataSources',
    );
  }
}
