import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {ImpactTotalFoodAvailability} from '../models';

const config: ModelCrudRestApiConfig = {
  model: ImpactTotalFoodAvailability,
  pattern: 'ReadOnly',
  dataSource: 'db',
  basePath: '/projection-total',
};
module.exports = config;
