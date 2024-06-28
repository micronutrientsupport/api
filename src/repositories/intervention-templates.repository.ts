import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionTemplates, InterventionTemplatesRelations} from '../models';

export class InterventionTemplatesRepository extends DefaultCrudRepository<
  InterventionTemplates,
  typeof InterventionTemplates.prototype.id,
  InterventionTemplatesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionTemplates, dataSource);
  }
}
