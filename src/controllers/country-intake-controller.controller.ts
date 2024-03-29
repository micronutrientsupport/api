// Uncomment these imports to begin using these cool features!

import {Filter, repository} from '@loopback/repository';
import {param} from '@loopback/rest';
import {CountryIntake} from '../models';
import {
  CountryIntakeGeojsonRepository,
  CountryIntakeRepository,
  CountryRepository,
  HouseholdDeficiencyAfeAggregationRepository,
} from '../repositories';
import {toGeoJSONFeatureCollection} from '../utils/toGeoJSON';
import {StandardJsonResponse} from './standardJsonResponse';

// import {inject} from '@loopback/core';

export class CountryIntakeControllerController {
  constructor(
    @repository(CountryRepository)
    public countryRepository: CountryRepository,
    @repository(CountryIntakeGeojsonRepository)
    public countryIntakeGeojsonRepository: CountryIntakeGeojsonRepository,
    @repository(CountryIntakeRepository)
    public countryIntakeRepository: CountryIntakeRepository,
    @repository(HouseholdDeficiencyAfeAggregationRepository)
    public householdDeficiencyAfeAggregationRepository: HouseholdDeficiencyAfeAggregationRepository,
  ) {}

  async findScenario(
    @param({name: 'countryId', in: 'query', required: true}) countryId: string,
    @param({name: 'micronutrientId', in: 'query', required: true})
    micronutrientId: string,
    @param({name: 'fooditemId', in: 'query', required: true})
    fooditemId: string,
    @param({name: 'compositionId', in: 'query', required: true})
    compositionId: number,
    @param({name: 'newValue', in: 'query', required: true}) newValue: number,
    @param.filter(CountryIntake) filter?: Filter<CountryIntake>,
  ): Promise<object> {
    const countryFilter: Filter = {
      where: {
        id: countryId,
      },
    };
    const country = await this.countryRepository.find(countryFilter);

    let data = await this.countryIntakeRepository.runCompositionScenario(
      countryId,
      compositionId,
      fooditemId,
      micronutrientId,
      newValue,
    );

    const mnMap = {
      A: 'VitaminA_in_RAE_in_mcg',
      B6: 'VitaminB6_in_mg',
      B12: 'VitaminB12_in_mcg',
      C: 'VitaminC_in_mg',
      D: 'VitaminD_in_mcg',
      E: 'VitaminE_in_mg',
      B1: 'Thiamin_in_mg',
      B2: 'Riboflavin_in_mg',
      B3: 'Niacin_in_mg',
      Folic: 'Folicacid_in_mcg',
      B9: 'Folate_in_mcg',
      B5: 'Pantothenate_in_mg',
      B7: 'Biotin_in_mcg',
      IP6: 'PhyticAcid_in_mg',
      Ca: 'Ca_in_mg',
      Cu: 'Cu_in_mg',
      Fe: 'Fe_in_mg',
      Mg: 'Mg_in_mg',
      Mn: 'Mn_in_mcg',
      P: 'P_in_mg',
      K: 'K_in_mg',
      Na: 'Na_in_mg',
      Zn: 'Zn_in_mg',
      I: 'I_in_mcg',
      N: 'Nitrogen_in_g ',
      Se: 'Se_in_mcg',
      Ash: 'Ash_in_g',
      Fibre: 'Fibre_in_g',
      Carbohydrate: 'Carbohydrateavailable_in_g',
      Cholesterol: 'Cholesterol_in_mg',
      Protein: 'TotalProtein_in_g',
      Fat: 'TotalFats_in_g',
      Energy: 'Energy_in_kCal',
      Moisture: 'Moisture_in_g',
    };

    data = data.map(val => {
      const mn_col: string = (mnMap as any)[micronutrientId];
      console.log(mn_col);
      const res: any = {};
      res.country_id = val.country_id;
      res.mn_absolute = val[mn_col.toLowerCase()];

      res.geometry = country[0].geometry;
      res.mn_absolute_unit = 'mg';
      res.mn_threshold = 0;
      res.mn_threshold_unit = '%';
      res.subregion_name = country[0].name;
      res.subregion_type = 'Country';

      // mn_absolute_unit: "mg"
      // mn_threshold: 0
      // mn_threshold_unit: "%"
      // subregion_name: "Mozambique"
      // subregion_type: "Country"
      return res;
    });

    data = [toGeoJSONFeatureCollection(data)];

    return new StandardJsonResponse<Array<CountryIntake>>(
      `${data.length} top results returned.`,
      data,
    );
  }
}
