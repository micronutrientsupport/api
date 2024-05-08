import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {IntakeThreshold, IntakeThresholdRelations} from '../models';

export class IntakeThresholdRepository extends DefaultCrudRepository<
  IntakeThreshold,
  typeof IntakeThreshold.prototype.id,
  IntakeThresholdRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(IntakeThreshold, dataSource);
  }
}
