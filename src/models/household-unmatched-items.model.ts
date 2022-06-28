import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'household_unmatched_items',
    },
  },
})
export class HouseholdUnmatchedItems extends Entity {
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
    postgresql: {
      columnName: 'amount_consumed_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  amountConsumedInG?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'household_count',
      dataType: 'bigint',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  householdCount?: number;

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

  constructor(data?: Partial<HouseholdUnmatchedItems>) {
    super(data);
  }
}

export interface HouseholdUnmatchedItemsRelations {
  // describe navigational properties here
}

export type HouseholdUnmatchedItemsWithRelations = HouseholdUnmatchedItems &
  HouseholdUnmatchedItemsRelations;
