import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionFortificationLevelSummary, InterventionFortificationLevelSummaryRelations} from '../models';

export class InterventionFortificationLevelSummaryRepository extends DefaultCrudRepository<
  InterventionFortificationLevelSummary,
  typeof InterventionFortificationLevelSummary.prototype.id,
  InterventionFortificationLevelSummaryRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionFortificationLevelSummary, dataSource);
  }
}
