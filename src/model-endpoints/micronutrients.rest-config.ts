import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Micronutrients} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Micronutrients,
  pattern: 'ReadOnly',
  dataSource: 'db',
  basePath: '/micronutrients',
};
module.exports = config;
