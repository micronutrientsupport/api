import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {FoodGenera, FoodGeneraRelations} from '../models';

export class FoodGeneraRepository extends DefaultCrudRepository<
  FoodGenera,
  typeof FoodGenera.prototype.id,
  FoodGeneraRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(FoodGenera, dataSource);
  }
}
