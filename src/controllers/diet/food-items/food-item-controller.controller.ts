import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {FoodGenusNutrientsPivot, FoodGroupItems} from '../../../models';
import {
  FoodGenusNutrientsPivotRepository,
  FoodGroupItemsRepository,
} from '../../../repositories';
import {StandardJsonResponse} from '../../standardJsonResponse';

export class FoodItemControllerController {
  constructor(
    @repository(FoodGenusNutrientsPivotRepository)
    public foodGenusNutrientsPivotRepository: FoodGenusNutrientsPivotRepository,
    @repository(FoodGroupItemsRepository)
    public foodGroupItemsRepository: FoodGroupItemsRepository,
  ) {}

  @get('/diet/food-group', {
    summary: 'Get Food Groups and Food Items',
    description: 'Return a list of food groups and their associated fooditems',
    tags: ['diet'],
    responses: {
      '200': {
        description: 'Array of FoodGroupItems model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(FoodGroupItems, {
                includeRelations: true,
              }),
            },
          },
        },
      },
    },
  })
  async findFoodGroup(
    @param.filter(FoodGroupItems) filter?: Filter<FoodGroupItems>,
  ): Promise<object> {
    const data = await this.foodGroupItemsRepository.find(filter);
    return new StandardJsonResponse<Array<FoodGroupItems>>(
      `${data.length} top results returned.`,
      data,
    );
  }

  @get('/diet/composition', {
    summary: 'composition',
    tags: ['diet'],
    responses: {
      '200': {
        description: 'Array of FoodGenusNutrientsPivot model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(FoodGenusNutrientsPivot, {
                includeRelations: true,
              }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.string('compositionId') compositionId: string,
    @param.query.string('micronutrientId') micronutrientId: string,
    @param.query.string('fooditemId') fooditemId: string,
    //@param.filter(FoodGenusNutrientsPivot) filter?: Filter<FoodGenusNutrientsPivot>,
  ): Promise<object> {
    const filter: Filter = {
      where: {
        compositionId: compositionId,
        micronutrientId: micronutrientId,
        fooditemId: fooditemId,
      },
    };

    const data = await this.foodGenusNutrientsPivotRepository.find(filter);
    return new StandardJsonResponse<Array<FoodGenusNutrientsPivot>>(
      `${data.length} top results returned.`,
      data,
    );
  }
}
