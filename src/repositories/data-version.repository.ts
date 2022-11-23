import {DefaultCrudRepository} from '@loopback/repository';
import {DataVersion, DataVersionRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DataVersionRepository extends DefaultCrudRepository<
  DataVersion,
  typeof DataVersion.prototype.id,
  DataVersionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(DataVersion, dataSource);
  }
}
