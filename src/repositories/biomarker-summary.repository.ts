import {DefaultCrudRepository} from '@loopback/repository';
import {BiomarkerSummary, BiomarkerSummaryRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BiomarkerSummaryRepository extends DefaultCrudRepository<
  BiomarkerSummary,
  typeof BiomarkerSummary.prototype.id,
  BiomarkerSummaryRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(BiomarkerSummary, dataSource);
  }
}
