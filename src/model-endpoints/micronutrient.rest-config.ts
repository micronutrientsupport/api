import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Micronutrient} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Micronutrient,
  pattern: 'ReadOnly',
  dataSource: 'db',
  basePath: '/micronutrient',
};
module.exports = config;
