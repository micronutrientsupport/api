import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {ImpactFoodGroupAggregation} from '../models';

const config: ModelCrudRestApiConfig = {
  model: ImpactFoodGroupAggregation,
  pattern: 'ReadOnly',
  dataSource: 'db',
  basePath: '/projection-food-group',
};
module.exports = config;
