import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {ImpactScenario} from '../models';

const config: ModelCrudRestApiConfig = {
  model: ImpactScenario,
  pattern: 'ReadOnly',
  dataSource: 'db',
  basePath: '/projection-scenario',
  config: {
    custom: 'Hello'
  }
};
module.exports = config;
