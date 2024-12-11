import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionCropTargetting, InterventionCropTargettingRelations} from '../models';

export class InterventionCropTargettingRepository extends DefaultCrudRepository<
  InterventionCropTargetting,
  typeof InterventionCropTargetting.prototype.id,
  InterventionCropTargettingRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionCropTargetting, dataSource);
  }
}
