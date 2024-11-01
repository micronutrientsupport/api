import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionExtraCosts, InterventionExtraCostsRelations} from '../models';

export class InterventionExtraCostsRepository extends DefaultCrudRepository<
  InterventionExtraCosts,
  typeof InterventionExtraCosts.prototype.id,
  InterventionExtraCostsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionExtraCosts, dataSource);
  }
}
