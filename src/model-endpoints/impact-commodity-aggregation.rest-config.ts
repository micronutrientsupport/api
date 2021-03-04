import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {ImpactCommodityAggregation} from '../models';

const config: ModelCrudRestApiConfig = {
  model: ImpactCommodityAggregation,
  pattern: 'ReadOnly',
  dataSource: 'db',
  basePath: '/projection-commodity',
};
module.exports = config;
