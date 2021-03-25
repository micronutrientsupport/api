import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Top20MnPerHhsurvey} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Top20MnPerHhsurvey,
  pattern: 'ReadOnly',
  dataSource: 'db',
  basePath: '/top20mn-per-hh',
};
module.exports = config;
