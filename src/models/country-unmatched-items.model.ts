import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'country_unmatched_items',
    },
  },
})
export class CountryUnmatchedItems extends Entity {
  @property({
    type: 'number',
    scale: 0,
    id: true,
    postgresql: {
      columnName: 'consumption_data_id',
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
    scale: 0,
    id: true,
    postgresql: {
      columnName: 'composition_data_id',
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
    precision: 10,
    scale: 3,
    postgresql: {
      columnName: 'amount_consumed_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 10,
      dataScale: 3,
      nullable: 'YES',
    },
  })
  amountConsumedInG?: number;

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
      columnName: 'food_genus_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  foodGenusName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CountryUnmatchedItems>) {
    super(data);
  }
}

export interface CountryUnmatchedItemsRelations {
  // describe navigational properties here
}

export type CountryUnmatchedItemsWithRelations = CountryUnmatchedItems &
  CountryUnmatchedItemsRelations;
