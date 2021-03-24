import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {DietDataSources} from '../models';

const config: ModelCrudRestApiConfig = {
  model: DietDataSources,
  pattern: 'ReadOnly',
  dataSource: 'db',
  basePath: '/diet-data-source',
};
module.exports = config;
