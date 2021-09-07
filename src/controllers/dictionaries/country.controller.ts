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
import {toGeoJSONFeatureCollection} from '../../utils/toGeoJSON';
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
    produces: ['application/json', 'application/geo+json'],
    responses: new StandardOpenApiResponses('Array of Country model instances')
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(Country))
      .toObject(true),
  })
  async getCountryGeometries(
    @param.query.string('countryId', {
      description: 'ISO 3166-1 alpha-3 code for the country or territory',
      required: false,
      example: 'MWI',
    })
    countryId: string,
    @param.header.string('Accept', {
      description:
        'Defaults to `application/json`.  Requesting `application/geo+json` will result in the ' +
        'data being returned as a GeoJSON feature collection.  See ' +
        '[the resource page](./core-data-api/resources/standard-api-response-for-country-model#geojson-feature-collection)' +
        ' for more details',
      required: false,
      example: 'application/geo-json',
    })
    acceptHeader: string,
  ): Promise<StandardJsonResponse<Array<Country>> | object> {
    const filter: Filter = {
      where: {
        id: countryId,
      },
    };
    const countries = await this.countryRepository.find(filter);

    if (acceptHeader.startsWith('application/geo+json;')) {
      const countriesGeoJSON = toGeoJSONFeatureCollection(countries);
      this.response.set('Content-Type', 'application/geo+json');
      this.response.status(200).send(countriesGeoJSON);
      // Return the HTTP response object so that LoopBack framework skips the
      // generation of HTTP response
      return this.response;
    }

    return new StandardJsonResponse<Array<Country>>(
      `${countries.length} Countries returned.`,
      countries,
      'Country',
    );
  }
}
