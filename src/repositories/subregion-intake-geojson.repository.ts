import {DefaultCrudRepository} from '@loopback/repository';
import {SubregionIntakeGeojson, SubregionIntakeGeojsonRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SubregionIntakeGeojsonRepository extends DefaultCrudRepository<
  SubregionIntakeGeojson,
  typeof SubregionIntakeGeojson.prototype.id,
  SubregionIntakeGeojsonRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(SubregionIntakeGeojson, dataSource);
  }
}
