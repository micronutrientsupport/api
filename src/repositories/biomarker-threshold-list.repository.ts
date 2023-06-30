import {DefaultCrudRepository} from '@loopback/repository';
import {BiomarkerThresholdList, BiomarkerThresholdListRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BiomarkerThresholdListRepository extends DefaultCrudRepository<
  BiomarkerThresholdList,
  typeof BiomarkerThresholdList.prototype.id,
  BiomarkerThresholdListRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(BiomarkerThresholdList, dataSource);
  }
}
