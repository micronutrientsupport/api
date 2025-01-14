import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionTargetting, InterventionTargettingRelations} from '../models';

export class InterventionTargettingRepository extends DefaultCrudRepository<
  InterventionTargetting,
  typeof InterventionTargetting.prototype.id,
  InterventionTargettingRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionTargetting, dataSource);
  }
}
