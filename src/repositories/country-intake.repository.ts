import {inject} from '@loopback/core';
import {DefaultCrudRepository, Options} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {CountryIntake, CountryIntakeRelations} from '../models';

export class CountryIntakeRepository extends DefaultCrudRepository<
  CountryIntake,
  typeof CountryIntake.prototype.id,
  CountryIntakeRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CountryIntake, dataSource);
  }

  public async runCompositionScenario(countryId: string, fctSourceId: number, fooditemId: string, micronutrientId: string, newValue: number): Promise<(CountryIntake & CountryIntakeRelations)[]> {
    //console.log(this.dataSource.settings.schema)
    //console.log(this.modelClass.definition.settings)
    let o: Options;
    let schema = await this.dataSource.execute('SET schema \'andan-scenario\';');
    let result: CountryIntake[] = await this.dataSource.execute('SELECT * FROM "andan-scenario".create_country_scenario($1, $2::text, $3::text, $4) WHERE country_id=$5', [fctSourceId, fooditemId, micronutrientId, newValue, countryId]);

    return result;
  }
}
