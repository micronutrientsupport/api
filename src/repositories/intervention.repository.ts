import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Intervention, InterventionRelations} from '../models';

export class InterventionRepository extends DefaultCrudRepository<
  Intervention,
  typeof Intervention.prototype.id,
  InterventionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Intervention, dataSource);
  }
}
