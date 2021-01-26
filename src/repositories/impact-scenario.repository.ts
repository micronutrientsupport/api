import {DefaultCrudRepository} from '@loopback/repository';
import {ImpactScenario, ImpactScenarioRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ImpactScenarioRepository extends DefaultCrudRepository<
  ImpactScenario,
  typeof ImpactScenario.prototype.id,
  ImpactScenarioRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ImpactScenario, dataSource);
  }
}
