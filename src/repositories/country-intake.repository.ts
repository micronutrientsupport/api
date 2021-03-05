import {DefaultCrudRepository} from '@loopback/repository';
import {CountryIntake, CountryIntakeRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CountryIntakeRepository extends DefaultCrudRepository<
  CountryIntake,
  typeof CountryIntake.prototype.id,
  CountryIntakeRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CountryIntake, dataSource);
  }
}
