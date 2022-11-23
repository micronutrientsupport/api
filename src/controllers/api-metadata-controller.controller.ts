// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef} from '@loopback/rest';
import {DataVersion} from '../models';
import {DataVersionRepository} from '../repositories';
import {StandardJsonResponse} from './standardJsonResponse';
import {StandardOpenApiResponses} from './standardOpenApiResponses';

// import {inject} from '@loopback/core';

export class ApiMetadataControllerController {
  constructor(
    @repository(DataVersionRepository)
    public dataVersionRepository: DataVersionRepository,
  ) {}

  @get('self/version', {
    summary: 'Get metadata about API and data versions',
    description: 'Get metadata about API and data versions',
    tags: ['meta'],
    responses: new StandardOpenApiResponses(
      'Array of DataVersion model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(DataVersion))
      .toObject(),
  })
  async find(): Promise<object> {
    const filter: Filter = {};
    const data = await this.dataVersionRepository.find(filter);

    const schema = data.find(record => record.type === 'schema')?.version;
    const seed = data.find(record => record.type === 'schema')?.version;
    const api = process.env.npm_package_version;

    return new StandardJsonResponse<
      Array<{api: string; seed: string; schema: string}>
    >(
      `${data.length} data version metadata records returned.`,
      [
        {
          api: api ? api : 'Unknown',
          seed: seed ? seed : 'Unknown',
          schema: schema ? schema : 'Unknown',
        },
      ],
      'DataVersion',
    );
  }
}
