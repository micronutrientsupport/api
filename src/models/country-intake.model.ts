import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'bmgf', table: 'country_intake'},
  },
})
export class CountryIntake extends Entity {
  @property({
    type: 'string',
    postgresql: {
      columnName: 'country_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  countryId?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'fct_source_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  compositionDataId?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'data_source_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  consumptionDataId?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'moisture_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  moistureInG?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'energy_in_kcal',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  energyInKcal?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'energy_in_kj',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  energyInKj?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'nitrogen_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  nitrogenInG?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'totalprotein_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  totalproteinInG?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'totalfats_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  totalfatsInG?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'saturatedfa_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  saturatedfaInG?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'monounsaturatedfa_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  monounsaturatedfaInG?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'polyunsaturatedfa_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  polyunsaturatedfaInG?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'cholesterol_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  cholesterolInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'carbohydrates_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  carbohydratesInG?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'fibre_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  fibreInG?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'ash_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  ashInG?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'ca_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  caInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'fe_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  feInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'mg_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  mgInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'p_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  pInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'k_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  kInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'na_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  naInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'zn_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  znInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'cu_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  cuInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'mn_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  mnInMcg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'i_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  iInMcg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'se_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  seInMcg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'vitamina_in_rae_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  vitaminaInRaeInMcg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'thiamin_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  thiaminInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'riboflavin_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  riboflavinInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'niacin_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  niacinInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'vitaminb6_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  vitaminb6InMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'folicacid_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  folicacidInMcg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'folate_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  folateInMcg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'vitaminb12_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  vitaminb12InMcg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'pantothenate_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  pantothenateInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'biotin_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  biotinInMcg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'vitaminc_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  vitamincInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'vitamind_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  vitamindInMcg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'vitamine_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  vitamineInMg?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'phyticacid_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  phyticacidInMg?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CountryIntake>) {
    super(data);
  }
}

export interface CountryIntakeRelations {
  // describe navigational properties here
}

export type CountryIntakeWithRelations = CountryIntake & CountryIntakeRelations;
