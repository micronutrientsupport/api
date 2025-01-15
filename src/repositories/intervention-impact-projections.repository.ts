import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionImpactProjections, InterventionImpactProjectionsRelations} from '../models';

export class InterventionImpactProjectionsRepository extends DefaultCrudRepository<
  InterventionImpactProjections,
  typeof InterventionImpactProjections.prototype.id,
  InterventionImpactProjectionsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionImpactProjections, dataSource);
  }
}
