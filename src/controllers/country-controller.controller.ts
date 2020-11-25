import {

  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef
} from '@loopback/rest';
import {Country} from '../models';
import {CountryRepository} from '../repositories';
import {StandardJsonResponse} from './standardJsonResponse';
import {StandardOpenApiResponses} from './standardOpenApiResponses';

export class CountryController {
  constructor(
    @repository(CountryRepository)
    public countryRepository: CountryRepository,
  ) {}

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
