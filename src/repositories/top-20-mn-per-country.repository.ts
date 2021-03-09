import {DefaultCrudRepository} from '@loopback/repository';
import {Top20MnPerCountry, Top20MnPerCountryRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class Top20MnPerCountryRepository extends DefaultCrudRepository<
  Top20MnPerCountry,
  typeof Top20MnPerCountry.prototype.id,
  Top20MnPerCountryRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Top20MnPerCountry, dataSource);
  }
}
