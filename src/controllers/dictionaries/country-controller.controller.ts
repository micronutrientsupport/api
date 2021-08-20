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
//import {CacheHeader} from '../../decorators/cache-header.decorator';
import {Country} from '../../models';
import {CountryRepository} from '../../repositories';
import {StandardJsonResponse} from '../standardJsonResponse';
import {StandardOpenApiResponses} from '../standardOpenApiResponses';

export class CountryController {
  constructor(
    @repository(CountryRepository)
    public countryRepository: CountryRepository,
    @inject(RestBindings.Http.RESPONSE) public response: Response,
  ) {}

  @CacheHeader(600)
  @get('/countries', {
    summary: 'Get country geometries',
    description: 'Get names and geometries of countries in the tool',
    tags: ['geography'],
    responses: new StandardOpenApiResponses('Array of Country model instances')
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(Country))
      .toObject(),
  })
  async getCountryGeometries(
    @param.query.string('countryId', {
      description: 'ISO 3166-1 alpha-3 code for the country or territory',
      required: false,
      example: 'MWI',
    })
    countryId: string,
  ): Promise<StandardJsonResponse<Array<Country>>> {
    const filter: Filter = {
      where: {
        id: countryId,
      },
    };
    const countries = await this.countryRepository.find(filter);
    return new StandardJsonResponse<Array<Country>>(
      `${countries.length} Countries returned.`,
      countries,
      'Country',
    );
  }
}
