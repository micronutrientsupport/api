import {DefaultCrudRepository} from '@loopback/repository';
import {InterventionRecurringCosts, InterventionRecurringCostsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InterventionRecurringCostsRepository extends DefaultCrudRepository<
  InterventionRecurringCosts,
  typeof InterventionRecurringCosts.prototype.id,
  InterventionRecurringCostsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionRecurringCosts, dataSource);
  }
}
