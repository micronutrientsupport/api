// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {HouseholdIntakeAfe} from '../../../models';
import {HouseholdIntakeAfeRepository} from '../../../repositories';
import {StandardJsonResponse} from '../../standardJsonResponse';
import {StandardOpenApiResponses} from '../../standardOpenApiResponses';

// import {inject} from '@loopback/core';

export class NationalScaleHouseholds {
  constructor(
    @repository(HouseholdIntakeAfeRepository)
    public householdIntakeAfeRepository: HouseholdIntakeAfeRepository,
  ) {}

  @get('/diet/household/overview', {
    summary: 'Get national summary (houshold)',
    description:
      'Get a list of dietary supply values for anonymised households across the nation',
    tags: ['diet'],
    responses: new StandardOpenApiResponses(
      'Array of HouseholdIntakeAfe model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(HouseholdIntakeAfe))
      .toObject(),
  })
  async find(
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
        'ID for the country level consumption data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    consumptionDataId: number,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        micronutrientId: micronutrientId,
        compositionDataId: compositionDataId,
        consumptionDataId: consumptionDataId,
      },
    };
    const data = await this.householdIntakeAfeRepository.find(filter);
    return new StandardJsonResponse<Array<HouseholdIntakeAfe>>(
      `${data.length} top food results returned.`,
      data,
      'HouseholdIntakeAfe',
    );
  }
}
