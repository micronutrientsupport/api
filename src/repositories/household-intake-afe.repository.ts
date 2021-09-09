import {DefaultCrudRepository} from '@loopback/repository';
import {HouseholdIntakeAfe, HouseholdIntakeAfeRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HouseholdIntakeAfeRepository extends DefaultCrudRepository<
  HouseholdIntakeAfe,
  typeof HouseholdIntakeAfe.prototype.id,
  HouseholdIntakeAfeRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(HouseholdIntakeAfe, dataSource);
  }
}
