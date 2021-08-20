// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {DietDataSources} from '../models';
import {DietDataSourcesRepository} from '../repositories';
import {StandardJsonResponse} from './standardJsonResponse';
import {StandardOpenApiResponses} from './standardOpenApiResponses';

// import {inject} from '@loopback/core';

export class DataSourceControllerController {
  constructor(
    @repository(DietDataSourcesRepository)
    public dietDataSourcesRepository: DietDataSourcesRepository,
  ) {}

  @get('/data-source/{countryId}/{dataType}', {
    summary: 'data source',
    responses: new StandardOpenApiResponses('Data sources')
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(DietDataSources))
      .toObject(),
  })
  async find(
    @param.path.string('countryId') countryId: string,
  ): Promise<object> {
    const filter: Filter = {where: {countryId: countryId}};
    const data = await this.dietDataSourcesRepository.find(filter);
    return new StandardJsonResponse<Array<DietDataSources>>(
      `${data.length} data sources returned.`,
      data,
    );
  }
}
