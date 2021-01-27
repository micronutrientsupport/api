import {DefaultCrudRepository} from '@loopback/repository';
import {ImpactTotalFoodAvailability, ImpactTotalFoodAvailabilityRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ImpactTotalFoodAvailabilityRepository extends DefaultCrudRepository<
  ImpactTotalFoodAvailability,
  typeof ImpactTotalFoodAvailability.prototype.country,
  ImpactTotalFoodAvailabilityRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ImpactTotalFoodAvailability, dataSource);
  }
}
