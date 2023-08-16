import {DefaultCrudRepository} from '@loopback/repository';
import {CountryConsumptionFctlistMatches, CountryConsumptionFctlistMatchesRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CountryConsumptionFctlistMatchesRepository extends DefaultCrudRepository<
  CountryConsumptionFctlistMatches,
  typeof CountryConsumptionFctlistMatches.prototype.id,
  CountryConsumptionFctlistMatchesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CountryConsumptionFctlistMatches, dataSource);
  }
}
