import {DefaultCrudRepository} from '@loopback/repository';
import {HouseholdDeficiencyAfeAggregation, HouseholdDeficiencyAfeAggregationRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HouseholdDeficiencyAfeAggregationRepository extends DefaultCrudRepository<
  HouseholdDeficiencyAfeAggregation,
  typeof HouseholdDeficiencyAfeAggregation.prototype.surveyId,
  HouseholdDeficiencyAfeAggregationRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(HouseholdDeficiencyAfeAggregation, dataSource);
  }
}
