import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionStatus, InterventionStatusRelations} from '../models';

export class InterventionStatusRepository extends DefaultCrudRepository<
  InterventionStatus,
  typeof InterventionStatus.prototype.id,
  InterventionStatusRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionStatus, dataSource);
  }
}
