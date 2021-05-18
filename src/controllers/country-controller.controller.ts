import {inject} from '@loopback/core';
import {

  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,

  Response, RestBindings
} from '@loopback/rest';
import {CacheHeader} from '../decorators/cache-header.decorator';
import {Country} from '../models';
import {CountryRepository} from '../repositories';
import {StandardJsonResponse} from './standardJsonResponse';
import {StandardOpenApiResponses} from './standardOpenApiResponses';

export class CountryController {
  constructor(
    @repository(CountryRepository)
    public countryRepository: CountryRepository,
    @inject(RestBindings.Http.RESPONSE) public response: Response
  ) { }

  @CacheHeader(600)
  @get('/country', {
    responses:
      new StandardOpenApiResponses('Array of Country model instances')
        .setDataType('array')
        .setObjectSchema(getModelSchemaRef(Country))
        .toObject(),
  })
  async find(): Promise<StandardJsonResponse<Array<Country>>> {
    return this.countryRepository.find()
      .then((countries: Country[]) => {
        return new StandardJsonResponse<Array<Country>>(
          `${countries.length} Countries returned.`,
          countries,
        );
      });
  }
}
