import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionProjectedHouseholds, InterventionProjectedHouseholdsRelations} from '../models';

export class InterventionProjectedHouseholdsRepository extends DefaultCrudRepository<
  InterventionProjectedHouseholds,
  typeof InterventionProjectedHouseholds.prototype.id,
  InterventionProjectedHouseholdsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionProjectedHouseholds, dataSource);
  }
}
