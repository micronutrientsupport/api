import {DefaultCrudRepository} from '@loopback/repository';
import {InterventionIndustryInformation, InterventionIndustryInformationRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InterventionIndustryInformationRepository extends DefaultCrudRepository<
  InterventionIndustryInformation,
  typeof InterventionIndustryInformation.prototype.id,
  InterventionIndustryInformationRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(InterventionIndustryInformation, dataSource);
  }
}
