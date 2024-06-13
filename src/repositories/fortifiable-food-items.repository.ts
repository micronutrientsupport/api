import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {FortifiableFoodItems, FortifiableFoodItemsRelations} from '../models';

export class FortifiableFoodItemsRepository extends DefaultCrudRepository<
  FortifiableFoodItems,
  typeof FortifiableFoodItems.prototype.id,
  FortifiableFoodItemsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(FortifiableFoodItems, dataSource);
  }
}
