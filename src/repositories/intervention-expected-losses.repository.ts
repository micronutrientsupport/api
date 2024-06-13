import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionExpectedLosses, InterventionExpectedLossesRelations} from '../models';

export class InterventionExpectedLossesRepository extends DefaultCrudRepository<
  InterventionExpectedLosses,
  typeof InterventionExpectedLosses.prototype.id,
  InterventionExpectedLossesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionExpectedLosses, dataSource);
  }
}
