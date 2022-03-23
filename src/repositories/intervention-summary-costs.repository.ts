import {DefaultCrudRepository} from '@loopback/repository';
import {InterventionSummaryCosts, InterventionSummaryCostsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InterventionSummaryCostsRepository extends DefaultCrudRepository<
  InterventionSummaryCosts,
  typeof InterventionSummaryCosts.prototype.id,
  InterventionSummaryCostsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionSummaryCosts, dataSource);
  }
}
