import {DefaultCrudRepository} from '@loopback/repository';
import {MicronutrientDropdown, MicronutrientDropdownRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MicronutrientDropdownRepository extends DefaultCrudRepository<
  MicronutrientDropdown,
  typeof MicronutrientDropdown.prototype.id,
  MicronutrientDropdownRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(MicronutrientDropdown, dataSource);
  }
}
