import {DefaultCrudRepository} from '@loopback/repository';
import {InterventionVehicleStandard, InterventionVehicleStandardRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InterventionVehicleStandardRepository extends DefaultCrudRepository<
  InterventionVehicleStandard,
  typeof InterventionVehicleStandard.prototype.id,
  InterventionVehicleStandardRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionVehicleStandard, dataSource);
  }
}
