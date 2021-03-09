import {DefaultCrudRepository} from '@loopback/repository';
import {DietDataSources, DietDataSourcesRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DietDataSourcesRepository extends DefaultCrudRepository<
  DietDataSources,
  typeof DietDataSources.prototype.id,
  DietDataSourcesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(DietDataSources, dataSource);
  }
}
