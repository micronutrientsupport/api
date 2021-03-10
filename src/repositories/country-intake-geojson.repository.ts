import {DefaultCrudRepository} from '@loopback/repository';
import {CountryIntakeGeojson, CountryIntakeGeojsonRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CountryIntakeGeojsonRepository extends DefaultCrudRepository<
  CountryIntakeGeojson,
  typeof CountryIntakeGeojson.prototype.id,
  CountryIntakeGeojsonRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CountryIntakeGeojson, dataSource);
  }
}
