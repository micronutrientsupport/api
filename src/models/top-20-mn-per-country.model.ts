import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: process.env.DB_SCHEMA, table: 'top20_mn_per_country'},
  },
})
export class Top20MnPerCountry extends Entity {
  @property({
    type: 'number',
    description:
      'The ID of the consumption data used for matching and calculations',
    id: true,
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
    description:
      'The ID of the consumption data used for matching and calculations',
    id: true,
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
    type: 'string',
    description: 'ID of the micronutrient',
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
    type: 'string',
    description: 'Food Genus of the contributing food item',
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
    type: 'number',
    description:
      'Quantity of micronutrient provided by the food item per capita per day',
    postgresql: {
      columnName: 'mn_consumed_per_day',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  dailyMnContribution?: number;

  @property({
    type: 'number',
    description:
      'Ranking of the scale of micronutrient contribution from this food item (low number = greater contribution)',
    scale: 0,
    postgresql: {
      columnName: 'ranking',
      dataType: 'bigint',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  ranking?: number;

  @property({
    type: 'string',
    description: 'Human readbale name of the contributing food item',
    postgresql: {
      columnName: 'food_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  foodGenusName?: string;

  @property({
    type: 'string',
    description: 'ID of the food group the contributing food item belongs to',
    postgresql: {
      columnName: 'food_group_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  foodGroupId?: string;

  @property({
    type: 'string',
    description:
      'Human readbale name of the food group the contributing food item belongs to',
    postgresql: {
      columnName: 'food_group_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  foodGroupName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Top20MnPerCountry>) {
    super(data);
  }
}

export interface Top20MnPerCountryRelations {
  // describe navigational properties here
}

export type Top20MnPerCountryWithRelations = Top20MnPerCountry &
  Top20MnPerCountryRelations;
