import {DefaultCrudRepository} from '@loopback/repository';
import {InterventionMonitoringInformation, InterventionMonitoringInformationRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InterventionMonitoringInformationRepository extends DefaultCrudRepository<
  InterventionMonitoringInformation,
  typeof InterventionMonitoringInformation.prototype.id,
  InterventionMonitoringInformationRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionMonitoringInformation, dataSource);
  }
}
