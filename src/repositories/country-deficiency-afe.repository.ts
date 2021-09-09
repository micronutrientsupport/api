import {DefaultCrudRepository} from '@loopback/repository';
import {CountryDeficiencyAfe, CountryDeficiencyAfeRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CountryDeficiencyAfeRepository extends DefaultCrudRepository<
  CountryDeficiencyAfe,
  typeof CountryDeficiencyAfe.prototype.id,
  CountryDeficiencyAfeRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CountryDeficiencyAfe, dataSource);
  }
}
