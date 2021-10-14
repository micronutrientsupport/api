import {DefaultCrudRepository} from '@loopback/repository';
import {CountryConsumption, CountryConsumptionRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CountryConsumptionRepository extends DefaultCrudRepository<
  CountryConsumption,
  typeof CountryConsumption.prototype.id,
  CountryConsumptionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CountryConsumption, dataSource);
  }
}
