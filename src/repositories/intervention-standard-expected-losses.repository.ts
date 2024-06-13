import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionStandardExpectedLosses, InterventionStandardExpectedLossesRelations} from '../models';

export class InterventionStandardExpectedLossesRepository extends DefaultCrudRepository<
  InterventionStandardExpectedLosses,
  typeof InterventionStandardExpectedLosses.prototype.id,
  InterventionStandardExpectedLossesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionStandardExpectedLosses, dataSource);
  }
}
