import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InterventionSeedPrices, InterventionSeedPricesRelations} from '../models';

export class InterventionSeedPricesRepository extends DefaultCrudRepository<
  InterventionSeedPrices,
  typeof InterventionSeedPrices.prototype.id,
  InterventionSeedPricesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionSeedPrices, dataSource);
  }
}
