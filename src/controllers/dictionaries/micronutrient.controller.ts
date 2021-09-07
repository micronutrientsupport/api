import {inject} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  Response,
  RestBindings,
} from '@loopback/rest';
import {CacheHeader} from '../../decorators/cache-header.decorator';
import {Micronutrient} from '../../models';
import {MicronutrientRepository} from '../../repositories';
import {StandardJsonResponse} from '../standardJsonResponse';
import {StandardOpenApiResponses} from '../standardOpenApiResponses';

export class MicronutrientController {
  constructor(
    @repository(MicronutrientRepository)
    public micronutrientRepository: MicronutrientRepository,
    @inject(RestBindings.Http.RESPONSE) public response: Response,
  ) {}

  @CacheHeader(600)
  @get('/micronutrients', {
    summary: 'Get Micronutrients',
    description: 'Get names and geometries of countries in the tool',
    tags: ['micronutrients'],
    responses: new StandardOpenApiResponses(
      'Array of Micronutrient model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(Micronutrient))
      .toObject(),
  })
  async getMicronutrients(
    @param.query.string('micronutrientId', {
      description: 'ID of the micronutrient',
      required: false,
      example: 'Ca',
    })
    micronutrientId: string,
  ): Promise<StandardJsonResponse<Array<Micronutrient>>> {
    const filter: Filter = {
      where: {
        id: micronutrientId,
      },
    };
    const micronutrients = await this.micronutrientRepository.find(filter);
    return new StandardJsonResponse<Array<Micronutrient>>(
      `${micronutrients.length} Micronutrients returned.`,
      micronutrients,
      'Micronutrient',
    );
  }
}
