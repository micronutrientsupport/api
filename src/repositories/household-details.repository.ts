import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {HouseholdDetails, HouseholdDetailsRelations} from '../models';

export class HouseholdDetailsRepository extends DefaultCrudRepository<
  HouseholdDetails,
  typeof HouseholdDetails.prototype.id,
  HouseholdDetailsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(HouseholdDetails, dataSource);
  }
}
