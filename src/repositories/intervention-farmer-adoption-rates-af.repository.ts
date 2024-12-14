import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {
  InterventionFarmerAdoptionRatesAF,
  InterventionFarmerAdoptionRatesRelations,
} from '../models';

export class InterventionFarmerAdoptionRatesAFRepository extends DefaultCrudRepository<
  InterventionFarmerAdoptionRatesAF,
  typeof InterventionFarmerAdoptionRatesAF.prototype.id,
  InterventionFarmerAdoptionRatesRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(InterventionFarmerAdoptionRatesAF, dataSource);
  }
}
