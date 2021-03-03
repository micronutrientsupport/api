import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Micronutrient, MicronutrientRelations} from '../models';

export class MicronutrientRepository extends DefaultCrudRepository<
  Micronutrient,
  typeof Micronutrient.prototype.id,
  MicronutrientRelations
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Micronutrient, dataSource);
  }
}
