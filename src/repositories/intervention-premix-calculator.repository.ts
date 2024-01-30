import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionPremixCalculator, InterventionPremixCalculatorRelations} from '../models';

export class InterventionPremixCalculatorRepository extends DefaultCrudRepository<
  InterventionPremixCalculator,
  typeof InterventionPremixCalculator.prototype.id,
  InterventionPremixCalculatorRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionPremixCalculator, dataSource);
  }
}
