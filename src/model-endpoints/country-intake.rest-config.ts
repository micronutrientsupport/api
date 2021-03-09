import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {CountryIntake} from '../models';

const config: ModelCrudRestApiConfig = {
  model: CountryIntake,
  pattern: 'ReadOnly',
  dataSource: 'db',
  basePath: '/country-intakes',
};
module.exports = config;
