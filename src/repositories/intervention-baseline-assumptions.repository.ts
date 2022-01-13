import {DefaultCrudRepository} from '@loopback/repository';
import {InterventionBaselineAssumptions, InterventionBaselineAssumptionsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InterventionBaselineAssumptionsRepository extends DefaultCrudRepository<
  InterventionBaselineAssumptions,
  typeof InterventionBaselineAssumptions.prototype.id,
  InterventionBaselineAssumptionsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionBaselineAssumptions, dataSource);
  }
}
