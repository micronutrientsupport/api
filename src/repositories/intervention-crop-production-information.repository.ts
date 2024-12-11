import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionCropProductionInformation, InterventionCropProductionInformationRelations} from '../models';

export class InterventionCropProductionInformationRepository extends DefaultCrudRepository<
  InterventionCropProductionInformation,
  typeof InterventionCropProductionInformation.prototype.interventionId,
  InterventionCropProductionInformationRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionCropProductionInformation, dataSource);
  }
}
