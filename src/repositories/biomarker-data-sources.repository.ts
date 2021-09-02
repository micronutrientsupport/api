import {DefaultCrudRepository} from '@loopback/repository';
import {BiomarkerDataSources, BiomarkerDataSourcesRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BiomarkerDataSourcesRepository extends DefaultCrudRepository<
  BiomarkerDataSources,
  typeof BiomarkerDataSources.prototype.countryId,
  BiomarkerDataSourcesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(BiomarkerDataSources, dataSource);
  }
}
