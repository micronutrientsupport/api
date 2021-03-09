import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {ImpactSummary} from '../models';

const config: ModelCrudRestApiConfig = {
  model: ImpactSummary,
  pattern: 'ReadOnly',
  dataSource: 'db',
  basePath: '/projection-summary',
};
module.exports = config;
