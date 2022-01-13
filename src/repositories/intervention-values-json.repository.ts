import {DefaultCrudRepository} from '@loopback/repository';
import {InterventionValuesJson, InterventionValuesJsonRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InterventionValuesJsonRepository extends DefaultCrudRepository<
  InterventionValuesJson,
  typeof InterventionValuesJson.prototype.id,
  InterventionValuesJsonRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionValuesJson, dataSource);
  }
}
