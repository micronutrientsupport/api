import {DefaultCrudRepository} from '@loopback/repository';
import {HouseholdUnmatchedItems, HouseholdUnmatchedItemsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HouseholdUnmatchedItemsRepository extends DefaultCrudRepository<
  HouseholdUnmatchedItems,
  typeof HouseholdUnmatchedItems.prototype.id,
  HouseholdUnmatchedItemsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(HouseholdUnmatchedItems, dataSource);
  }
}
