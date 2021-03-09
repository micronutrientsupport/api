import {DefaultCrudRepository} from '@loopback/repository';
import {ImpactFoodGroupAggregation, ImpactFoodGroupAggregationRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ImpactFoodGroupAggregationRepository extends DefaultCrudRepository<
  ImpactFoodGroupAggregation,
  typeof ImpactFoodGroupAggregation.prototype.nutrient,
  ImpactFoodGroupAggregationRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ImpactFoodGroupAggregation, dataSource);
  }
}
