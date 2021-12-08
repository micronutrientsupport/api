import {DefaultCrudRepository} from '@loopback/repository';
import {CountryUnmatchedTotals, CountryUnmatchedTotalsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CountryUnmatchedTotalsRepository extends DefaultCrudRepository<
  CountryUnmatchedTotals,
  typeof CountryUnmatchedTotals.prototype.id,
  CountryUnmatchedTotalsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CountryUnmatchedTotals, dataSource);
  }
}
