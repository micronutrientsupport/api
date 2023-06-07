import {DefaultCrudRepository} from '@loopback/repository';
import {AggregationArea, AggregationAreaRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AggregationAreaRepository extends DefaultCrudRepository<
  AggregationArea,
  typeof AggregationArea.prototype.id,
  AggregationAreaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(AggregationArea, dataSource);
  }
}
