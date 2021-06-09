import {DefaultCrudRepository} from '@loopback/repository';
import {FoodGenusNutrientsPivot, FoodGenusNutrientsPivotRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FoodGenusNutrientsPivotRepository extends DefaultCrudRepository<
  FoodGenusNutrientsPivot,
  typeof FoodGenusNutrientsPivot.prototype.id,
  FoodGenusNutrientsPivotRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(FoodGenusNutrientsPivot, dataSource);
  }
}
