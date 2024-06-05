import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {HouseholdConsumption, HouseholdConsumptionRelations} from '../models';

export class HouseholdConsumptionRepository extends DefaultCrudRepository<
  HouseholdConsumption,
  typeof HouseholdConsumption.prototype.id,
  HouseholdConsumptionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(HouseholdConsumption, dataSource);
  }
}
