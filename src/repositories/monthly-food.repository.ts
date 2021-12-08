import {DefaultCrudRepository} from '@loopback/repository';
import {MonthlyFood, MonthlyFoodRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MonthlyFoodRepository extends DefaultCrudRepository<
  MonthlyFood,
  typeof MonthlyFood.prototype.id,
  MonthlyFoodRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(MonthlyFood, dataSource);
  }
}
