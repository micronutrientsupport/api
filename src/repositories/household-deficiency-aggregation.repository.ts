import {DefaultCrudRepository} from '@loopback/repository';
import {HouseholdDeficiencyAggregation, HouseholdDeficiencyAggregationRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HouseholdDeficiencyAggregationRepository extends DefaultCrudRepository<
  HouseholdDeficiencyAggregation,
  typeof HouseholdDeficiencyAggregation.prototype.surveyId,
  HouseholdDeficiencyAggregationRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(HouseholdDeficiencyAggregation, dataSource);
  }
}
