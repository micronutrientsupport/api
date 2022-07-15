import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {
  HouseholdConsumptionFctlistMatches,
  HouseholdConsumptionFctlistMatchesRelations,
} from '../models';

export class HouseholdConsumptionFctlistMatchesRepository extends DefaultCrudRepository<
  HouseholdConsumptionFctlistMatches,
  typeof HouseholdConsumptionFctlistMatches.prototype.id,
  HouseholdConsumptionFctlistMatchesRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(HouseholdConsumptionFctlistMatches, dataSource);
  }
}
