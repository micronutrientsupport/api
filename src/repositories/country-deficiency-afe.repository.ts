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

  public async runCompositionScenario(
    compositionDataId: number,
    consumptionDataId: number,
    micronutrientId: string,
    foodGenusIds: string[],
    newCompositionValues: number[],
  ): Promise<(CountryDeficiencyAfe & CountryDeficiencyAfeRelations)[]> {
    const foodGenusIdStringArray = `{${foodGenusIds.join("','")}}`;
    const newCompositionValuesArray = `{${newCompositionValues.join(',')}}`;

    await this.dataSource.execute(
      'SET search_path TO ' + this.dataSource.settings.schema + ',public;',
    );
    const result: CountryDeficiencyAfe[] = await this.dataSource.execute(
      'SELECT * FROM create_country_deficiency_afe_composition_scenario($1::numeric, $2::numeric, $3::text[], $4::text, $5::numeric[])',
      [
        compositionDataId,
        consumptionDataId,
        foodGenusIdStringArray,
        micronutrientId,
        newCompositionValuesArray,
      ],
    );

    return result;
  }

  public async runConsumptionScenario(
    compositionDataId: number,
    consumptionDataId: number,
    micronutrientId: string,
    foodGenusIds: string[],
    newConsumptionValues: number[],
  ): Promise<(CountryDeficiencyAfe & CountryDeficiencyAfeRelations)[]> {
    const foodGenusIdStringArray = `{${foodGenusIds.join("','")}}`;
    const newCompositionValuesArray = `{${newConsumptionValues.join(',')}}`;

    await this.dataSource.execute(
      'SET search_path TO ' + this.dataSource.settings.schema + ',public;',
    );
    const result: CountryDeficiencyAfe[] = await this.dataSource.execute(
      'SELECT * FROM create_country_deficiency_afe_consumption_scenario($1::numeric, $2::numeric, $3::text[], $4::text, $5::numeric[])',
      [
        compositionDataId,
        consumptionDataId,
        foodGenusIdStringArray,
        micronutrientId,
        newCompositionValuesArray,
      ],
    );

    return result;
  }

  public async runComparisonScenario(
    compositionDataId: number,
    consumptionDataId: number,
    micronutrientId: string,
    foodGenusIds: string[],
    replacementFoodGenusIds: string[],
  ): Promise<(CountryDeficiencyAfe & CountryDeficiencyAfeRelations)[]> {
    const foodGenusIdStringArray = `{${foodGenusIds.join("','")}}`;
    const replacementFoodGenusIdStringArray = `{${replacementFoodGenusIds.join(
      "','",
    )}}`;

    await this.dataSource.execute(
      'SET search_path TO ' + this.dataSource.settings.schema + ',public;',
    );
    const result: CountryDeficiencyAfe[] = await this.dataSource.execute(
      'SELECT * FROM create_country_deficiency_afe_comparison_scenario($1::numeric, $2::numeric, $3::text[], $4::text, $5::text[])',
      [
        compositionDataId,
        consumptionDataId,
        foodGenusIdStringArray,
        micronutrientId,
        replacementFoodGenusIdStringArray,
      ],
    );

    return result;
  }
}
