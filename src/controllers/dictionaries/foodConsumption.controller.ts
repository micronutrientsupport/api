import {inject} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  Response,
  RestBindings,
} from '@loopback/rest';
import {CountryConsumption} from '../../models/country-consumption.model';
import {CountryConsumptionRepository} from '../../repositories/country-consumption.repository';
import {StandardJsonResponse} from '../standardJsonResponse';
import {StandardOpenApiResponses} from '../standardOpenApiResponses';

export class FoodConsumptionController {
  constructor(
    @repository(CountryConsumptionRepository)
    public countryConsumptionRepository: CountryConsumptionRepository,
    @inject(RestBindings.Http.RESPONSE) public response: Response,
  ) {}

  @get('/food-consumption', {
    summary: 'Get Food Consumption',
    description: 'Get the consumption of a given food item',
    tags: ['diet'],
    responses: new StandardOpenApiResponses(
      'Array of CountryConsumption model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(CountryConsumption))
      .toObject(),
  })
  async getFoodGroups(
    @param.query.string('consumptionDataId', {
      description:
        'ID for the consumption data source as returned by `/diet/data-sources`',
      required: false,
      example: '1',
    })
    consumptionDataId: number,
    @param.query.string('foodGenusId', {
      description: 'ID of the food genus',
      required: false,
      example: '1341.01',
    })
    foodGenusId: string,
  ): Promise<StandardJsonResponse<Array<CountryConsumption>>> {
    const filter: Filter = {
      where: {
        consumptionDataId: consumptionDataId,
        foodGenusId: foodGenusId,
      },
    };
    const data = await this.countryConsumptionRepository.find(filter);
    return new StandardJsonResponse<Array<CountryConsumption>>(
      `${data.length} consumptions returned.`,
      data,
      'CountryConsumption',
    );
  }
}
