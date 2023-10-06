import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionCellFormulaDeps, InterventionCellFormulaDepsRelations} from '../models';

export class InterventionCellFormulaDepsRepository extends DefaultCrudRepository<
  InterventionCellFormulaDeps,
  typeof InterventionCellFormulaDeps.prototype.id,
  InterventionCellFormulaDepsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionCellFormulaDeps, dataSource);
  }
}
