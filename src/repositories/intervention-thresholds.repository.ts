import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionThresholds, InterventionThresholdsRelations} from '../models';

export class InterventionThresholdsRepository extends DefaultCrudRepository<
  InterventionThresholds,
  typeof InterventionThresholds.prototype.id,
  InterventionThresholdsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionThresholds, dataSource);
  }
}
