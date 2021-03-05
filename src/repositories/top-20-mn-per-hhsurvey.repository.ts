import {DefaultCrudRepository} from '@loopback/repository';
import {Top20MnPerHhsurvey, Top20MnPerHhsurveyRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class Top20MnPerHhsurveyRepository extends DefaultCrudRepository<
  Top20MnPerHhsurvey,
  typeof Top20MnPerHhsurvey.prototype.id,
  Top20MnPerHhsurveyRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Top20MnPerHhsurvey, dataSource);
  }
}
