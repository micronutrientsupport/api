import {DefaultCrudRepository} from '@loopback/repository';
import {TmpRegionConsumption, TmpRegionConsumptionRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TmpRegionConsumptionRepository extends DefaultCrudRepository<
  TmpRegionConsumption,
  typeof TmpRegionConsumption.prototype.id,
  TmpRegionConsumptionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(TmpRegionConsumption, dataSource);
  }
}
