import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionFarmerAdoptionRates, InterventionFarmerAdoptionRatesRelations} from '../models';

export class InterventionFarmerAdoptionRatesRepository extends DefaultCrudRepository<
  InterventionFarmerAdoptionRates,
  typeof InterventionFarmerAdoptionRates.prototype.id,
  InterventionFarmerAdoptionRatesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionFarmerAdoptionRates, dataSource);
  }
}
