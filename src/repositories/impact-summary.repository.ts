import {DefaultCrudRepository} from '@loopback/repository';
import {ImpactSummary, ImpactSummaryRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ImpactSummaryRepository extends DefaultCrudRepository<
  ImpactSummary,
  typeof ImpactSummary.prototype.id,
  ImpactSummaryRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ImpactSummary, dataSource);
  }
}
