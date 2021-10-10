import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: process.env.DB_SCHEMA, table: 'fooditem'},
  },
})
export class Fooditem extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {
      columnName: 'id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  id: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'original_food_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  originalFoodId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'original_food_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  originalFoodName?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'food_genus_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  foodGenusId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'food_genus_confidence',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  foodGenusConfidence?: string;

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
  fctSourceId?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'data_reference_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  dataReferenceId?: string;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'moisture_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  moistureInG?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'energy_in_kcal',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  energyInKcal?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'energy_in_kj',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  energyInKj?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'nitrogen_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  nitrogenInG?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'totalprotein_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  totalproteinInG?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'totalfats_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  totalfatsInG?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'saturatedfa_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  saturatedfaInG?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'monounsaturatedfa_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  monounsaturatedfaInG?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'polyunsaturatedfa_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  polyunsaturatedfaInG?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'cholesterol_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  cholesterolInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'carbohydrateavailable_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  carbohydrateavailableInG?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'fibre_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  fibreInG?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'ash_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  ashInG?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'ca_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  caInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'fe_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  feInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'mg_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  mgInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'p_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  pInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'k_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  kInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'na_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  naInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'zn_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  znInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'cu_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  cuInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'mn_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  mnInMcg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'i_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  iInMcg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'se_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  seInMcg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'vitamina_in_rae_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  vitaminaInRaeInMcg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'thiamin_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  thiaminInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'riboflavin_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  riboflavinInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'niacin_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  niacinInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'vitaminb6_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  vitaminb6InMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'folicacid_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  folicacidInMcg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'folate_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  folateInMcg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'vitaminb12_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  vitaminb12InMcg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'pantothenate_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  pantothenateInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'biotin_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  biotinInMcg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'vitaminc_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  vitamincInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'vitamind_in_mcg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  vitamindInMcg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'vitamine_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  vitamineInMg?: number;

  @property({
    type: 'number',
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'phyticacid_in_mg',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
    },
  })
  phyticacidInMg?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Fooditem>) {
    super(data);
  }
}

export interface FooditemRelations {
  // describe navigational properties here
}

export type FooditemWithRelations = Fooditem & FooditemRelations;
