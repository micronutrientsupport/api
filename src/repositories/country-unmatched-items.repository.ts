import {DefaultCrudRepository} from '@loopback/repository';
import {CountryUnmatchedItems, CountryUnmatchedItemsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CountryUnmatchedItemsRepository extends DefaultCrudRepository<
  CountryUnmatchedItems,
  typeof CountryUnmatchedItems.prototype.id,
  CountryUnmatchedItemsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CountryUnmatchedItems, dataSource);
  }
}
