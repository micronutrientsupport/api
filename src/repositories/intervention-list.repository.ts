import {DefaultCrudRepository} from '@loopback/repository';
import {InterventionList, InterventionListRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InterventionListRepository extends DefaultCrudRepository<
  InterventionList,
  typeof InterventionList.prototype.id,
  InterventionListRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionList, dataSource);
  }
}
