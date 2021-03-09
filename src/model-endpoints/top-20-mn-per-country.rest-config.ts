import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Top20MnPerCountry} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Top20MnPerCountry,
  pattern: 'ReadOnly',
  dataSource: 'db',
  basePath: '/top20mn-per-countries',
};
module.exports = config;
