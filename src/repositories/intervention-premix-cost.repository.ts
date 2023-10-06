import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionPremixCost, InterventionPremixCostRelations} from '../models';

export class InterventionPremixCostRepository extends DefaultCrudRepository<
  InterventionPremixCost,
  typeof InterventionPremixCost.prototype.id,
  InterventionPremixCostRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionPremixCost, dataSource);
  }
}
