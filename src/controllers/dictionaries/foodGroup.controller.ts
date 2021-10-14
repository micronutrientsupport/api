import {inject} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, Response, RestBindings} from '@loopback/rest';
import {FoodGroupItems} from '../../models';
import {FoodGroupItemsRepository} from '../../repositories';
import {StandardJsonResponse} from '../standardJsonResponse';
import {StandardOpenApiResponses} from '../standardOpenApiResponses';

export class FoodGroupController {
  constructor(
    @repository(FoodGroupItemsRepository)
    public foodGroupItemsRepository: FoodGroupItemsRepository,
    @inject(RestBindings.Http.RESPONSE) public response: Response,
  ) {}

  @get('/food-groups', {
    summary: 'Get Food Groups',
    description: 'Get food groups and child food items',
    tags: ['diet'],
    responses: new StandardOpenApiResponses(
      'Array of FoodGroupItems model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(FoodGroupItems))
      .toObject(),
  })
  async getFoodGroups(): // @param.query.string('micronutrientId', {
  //   description: 'ID of the micronutrient',
  //   required: false,
  //   example: 'Ca',
  // })
  // micronutrientId: string,
  Promise<StandardJsonResponse<Array<FoodGroupItems>>> {
    const filter: Filter = {
      where: {
        //id: micronutrientId,
      },
    };
    const data = await this.foodGroupItemsRepository.find(filter);
    return new StandardJsonResponse<Array<FoodGroupItems>>(
      `${data.length} Food Groups returned.`,
      data,
      'FoodGroupItems',
    );
  }
}
