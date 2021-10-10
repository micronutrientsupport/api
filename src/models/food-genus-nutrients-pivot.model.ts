import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'food_genus_nutrients_pivot',
    },
  },
})
export class FoodGenusNutrientsPivot extends Entity {
  @property({
    type: 'string',
    id: true,
    postgresql: {
      columnName: 'food_genus_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  fooditemId?: string;

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
  compositionId?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'mn_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  micronutrientId?: string;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'mn_value',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  micronutrientValue?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<FoodGenusNutrientsPivot>) {
    super(data);
  }
}

export interface FoodGenusNutrientsPivotRelations {
  // describe navigational properties here
}

export type FoodGenusNutrientsPivotWithRelations = FoodGenusNutrientsPivot &
  FoodGenusNutrientsPivotRelations;
