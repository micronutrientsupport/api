import {DefaultCrudRepository} from '@loopback/repository';
import {InterventionData, InterventionDataRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InterventionDataRepository extends DefaultCrudRepository<
  InterventionData,
  typeof InterventionData.prototype.id,
  InterventionDataRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionData, dataSource);
  }
}
