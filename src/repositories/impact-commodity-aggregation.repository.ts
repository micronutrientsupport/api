import {DefaultCrudRepository} from '@loopback/repository';
import {ImpactCommodityAggregation, ImpactCommodityAggregationRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ImpactCommodityAggregationRepository extends DefaultCrudRepository<
  ImpactCommodityAggregation,
  typeof ImpactCommodityAggregation.prototype.id,
  ImpactCommodityAggregationRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ImpactCommodityAggregation, dataSource);
  }
}
