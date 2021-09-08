// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {BiomarkerDataSources} from '../../../models';
import {BiomarkerDataSourcesRepository} from '../../../repositories';
import {StandardJsonResponse} from '../../standardJsonResponse';
import {StandardOpenApiResponses} from '../../standardOpenApiResponses';

// import {inject} from '@loopback/core';

export class BiomarkerDataSourceController {
  constructor(
    @repository(BiomarkerDataSourcesRepository)
    public biomarkerDataSourcesRepository: BiomarkerDataSourcesRepository,
  ) {}

  @get('biomarker/data-sources', {
    summary: 'Get biomarker data sources by country',
    description:
      'Get the IDs for the _best_ data sources for use in subsequent requests',
    tags: ['biomarker'],
    responses: new StandardOpenApiResponses(
      'Array of BiomarkerDataSources model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(BiomarkerDataSources))
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
    @param.query.string('groupId', {
      description:
        'ID for the age-gender group as returned by `/biomarker/age-gender-groups`',
      required: false,
      example: 'WRA',
    })
    groupId: string,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        countryId: countryId,
        micronutrientId: micronutrientId,
        groupId: groupId,
      },
    };
    const data = await this.biomarkerDataSourcesRepository.find(filter);
    return new StandardJsonResponse<Array<BiomarkerDataSources>>(
      `${data.length} biomarker data sources returned.`,
      data,
      'BiomarkerDataSources',
    );
  }
}
