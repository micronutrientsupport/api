import {DefaultCrudRepository} from '@loopback/repository';
import {HouseholdUnmatchedTotals, HouseholdUnmatchedTotalsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HouseholdUnmatchedTotalsRepository extends DefaultCrudRepository<
  HouseholdUnmatchedTotals,
  typeof HouseholdUnmatchedTotals.prototype.id,
  HouseholdUnmatchedTotalsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(HouseholdUnmatchedTotals, dataSource);
  }
}
