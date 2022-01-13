import {DefaultCrudRepository} from '@loopback/repository';
import {InterventionStartupScaleupCosts, InterventionStartupScaleupCostsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InterventionStartupScaleupCostsRepository extends DefaultCrudRepository<
  InterventionStartupScaleupCosts,
  typeof InterventionStartupScaleupCosts.prototype.id,
  InterventionStartupScaleupCostsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionStartupScaleupCosts, dataSource);
  }
}
