import {inject} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  Response,
  RestBindings,
} from '@loopback/rest';
import {FoodGenusNutrientsPivot} from '../../models';
import {FoodGenusNutrientsPivotRepository} from '../../repositories';
import {StandardJsonResponse} from '../standardJsonResponse';
import {StandardOpenApiResponses} from '../standardOpenApiResponses';

export class FoodCompositionController {
  constructor(
    @repository(FoodGenusNutrientsPivotRepository)
    public foodGenusNutrientsPivotRepository: FoodGenusNutrientsPivotRepository,
    @inject(RestBindings.Http.RESPONSE) public response: Response,
  ) {}

  @get('/food-composition', {
    summary: 'Get Food Composition',
    description:
      'Get nutritional content of a given food item in a food composition table',
    tags: ['diet'],
    responses: new StandardOpenApiResponses(
      'Array of FoodGenusNutrientsPivot model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(FoodGenusNutrientsPivot))
      .toObject(),
  })
  async getFoodGroups(
    @param.query.string('compositionDataId', {
      description:
        'ID for the composition data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    compositionDataId: number,
    @param.query.string('micronutrientId', {
      description: 'ID of the micronutrient',
      required: false,
      example: 'Ca',
    })
    micronutrientId: string,
    @param.query.string('foodGenusId', {
      description: 'ID of the food genus',
      required: false,
      example: '1341.01',
    })
    foodGenusId: string,
  ): Promise<StandardJsonResponse<Array<FoodGenusNutrientsPivot>>> {
    const filter: Filter = {
      where: {
        micronutrientId: micronutrientId,
        compositionDataId: compositionDataId,
        foodGenusId: foodGenusId,
      },
    };
    const data = await this.foodGenusNutrientsPivotRepository.find(filter);
    return new StandardJsonResponse<Array<FoodGenusNutrientsPivot>>(
      `${data.length} compositions returned.`,
      data,
      'FoodGenusNutrientsPivot',
    );
  }
}
