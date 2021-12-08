import {DefaultCrudRepository} from '@loopback/repository';
import {MnBinRange, MnBinRangeRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MnBinRangeRepository extends DefaultCrudRepository<
  MnBinRange,
  typeof MnBinRange.prototype.id,
  MnBinRangeRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(MnBinRange, dataSource);
  }
}
