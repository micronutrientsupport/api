import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {FortificationLevel, FortificationLevelRelations} from '../models';

export class FortificationLevelRepository extends DefaultCrudRepository<
  FortificationLevel,
  typeof FortificationLevel.prototype.id,
  FortificationLevelRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(FortificationLevel, dataSource);
  }
}
