import {DefaultCrudRepository} from '@loopback/repository';
import {FoodGroupItems, FoodGroupItemsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FoodGroupItemsRepository extends DefaultCrudRepository<
  FoodGroupItems,
  typeof FoodGroupItems.prototype.id,
  FoodGroupItemsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(FoodGroupItems, dataSource);
  }
}
