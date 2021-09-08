import {DefaultCrudRepository} from '@loopback/repository';
import {BiomarkerGroup, BiomarkerGroupRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BiomarkerGroupRepository extends DefaultCrudRepository<
  BiomarkerGroup,
  typeof BiomarkerGroup.prototype.groupId,
  BiomarkerGroupRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(BiomarkerGroup, dataSource);
  }
}
