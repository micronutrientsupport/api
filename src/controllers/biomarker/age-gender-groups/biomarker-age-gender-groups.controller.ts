// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {BiomarkerGroup} from '../../../models';
import {BiomarkerGroupRepository} from '../../../repositories';
import {StandardJsonResponse} from '../../standardJsonResponse';
import {StandardOpenApiResponses} from '../../standardOpenApiResponses';

// import {inject} from '@loopback/core';

export class BiomarkerAgeGenderGroupsController {
  constructor(
    @repository(BiomarkerGroupRepository)
    public biomarkerGroupRepository: BiomarkerGroupRepository,
  ) {}

  @get('biomarker/age-gender-groups', {
    summary: 'Get biomarker age-gender groups',
    description:
      'Get age gender groups for biomarker survey participants',
    tags: ['biomarker'],
    responses: new StandardOpenApiResponses(
      'Array of BiomarkerGroup model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(BiomarkerGroup))
      .toObject(),
  })
  async find(
    @param.query.string('groupId', {
      description:
        'The ID of the biomarker age-gender group for subsequent requests',
      required: false,
      example: '1',
    })
    groupId: string,
    @param.query.string('supraGroup', {
      description: 'Classification of the biomarker age-gender group. Adult/Children',
      required: false,
      example: 'Adult',
    })
    supraGroup: string,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        groupId: groupId,
        supraGroup: supraGroup,
      },
    };
    const data = await this.biomarkerGroupRepository.find(filter);
    return new StandardJsonResponse<Array<BiomarkerGroup>>(
      `${data.length} biomarker age-gender groups returned.`,
      data,
      'BiomarkerGroup',
    );
  }
}
