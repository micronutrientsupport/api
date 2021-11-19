import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {CountryDeficiencyAfe, CountryDeficiencyAfeRelations} from '../models';

export class CountryDeficiencyAfeRepository extends DefaultCrudRepository<
  CountryDeficiencyAfe,
  typeof CountryDeficiencyAfe.prototype.id,
  CountryDeficiencyAfeRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(CountryDeficiencyAfe, dataSource);
  }

  private functionSQLCommands: {[key: string]: string} = {
    compositionScenario:
      'create_country_deficiency_afe_composition_scenario($1::numeric, $2::numeric, $3::text[], $4::text, $5::numeric[])',
    consumptionScenario:
      'create_country_deficiency_afe_consumption_scenario($1::numeric, $2::numeric, $3::text[], $4::text, $5::numeric[])',
    comparisonScenario:
      'create_country_deficiency_afe_comparison_scenario($1::numeric, $2::numeric, $3::text[], $4::text, $5::text[])',
  };

  public async runCompositionScenario(
    compositionDataId: number,
    consumptionDataId: number,
    micronutrientId: string,
    foodGenusIds: string[],
    newCompositionValues: number[],
  ): Promise<(CountryDeficiencyAfe & CountryDeficiencyAfeRelations)[]> {
    return this.executeSQLFunction('compositionScenario', [
      compositionDataId,
      consumptionDataId,
      foodGenusIds,
      micronutrientId,
      newCompositionValues,
    ]);
  }

  public async runConsumptionScenario(
    compositionDataId: number,
    consumptionDataId: number,
    micronutrientId: string,
    foodGenusIds: string[],
    newConsumptionValues: number[],
  ): Promise<(CountryDeficiencyAfe & CountryDeficiencyAfeRelations)[]> {
    return this.executeSQLFunction('consumptionScenario', [
      compositionDataId,
      consumptionDataId,
      foodGenusIds,
      micronutrientId,
      newConsumptionValues,
    ]);
  }

  public async runComparisonScenario(
    compositionDataId: number,
    consumptionDataId: number,
    micronutrientId: string,
    foodGenusIds: string[],
    replacementFoodGenusIds: string[],
  ): Promise<(CountryDeficiencyAfe & CountryDeficiencyAfeRelations)[]> {
    return this.executeSQLFunction('comparisonScenario', [
      compositionDataId,
      consumptionDataId,
      foodGenusIds,
      micronutrientId,
      replacementFoodGenusIds,
    ]);
  }

  private async executeSQLFunction(
    functionName: string,
    parameters: (string | number | string[] | number[])[],
  ): Promise<CountryDeficiencyAfe[]> {
    // Convert arrays into SQL string/number arrays
    const params = parameters.map(param => {
      if (Array.isArray(param)) {
        if (param.length > 0 && typeof param[0] === 'string') {
          param = `{${param.join("','")}}`;
        } else {
          param = `{${param.join("','")}}`;
        }
        return param;
      } else {
        return param;
      }
    });

    // Set the search path to include the current schema
    await this.dataSource.execute(
      'SET search_path TO ' + this.dataSource.settings.schema + ',public;',
    );

    // Execute the query
    const sql = 'SELECT * FROM ' + this.functionSQLCommands[functionName];
    const result: unknown[] = await this.dataSource.execute(sql, params);

    // Hydrate database rows into loopback models
    const resultModels: CountryDeficiencyAfe[] = result.map(res => {
      if (this.dataSource.connector) {
        return this.dataSource.connector.fromRow(this.modelClass.name, res);
      } else {
        return res;
      }
    });

    return resultModels;
  }
}
