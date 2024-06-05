import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {FctListFoodComposition, FctListFoodCompositionRelations} from '../models';

export class FctListFoodCompositionRepository extends DefaultCrudRepository<
  FctListFoodComposition,
  typeof FctListFoodComposition.prototype.id,
  FctListFoodCompositionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(FctListFoodComposition, dataSource);
  }
}
