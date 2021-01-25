import {DefaultCrudRepository} from '@loopback/repository';
import {Micronutrients, MicronutrientsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MicronutrientsRepository extends DefaultCrudRepository<
  Micronutrients,
  typeof Micronutrients.prototype.id,
  MicronutrientsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Micronutrients, dataSource);
  }
}
