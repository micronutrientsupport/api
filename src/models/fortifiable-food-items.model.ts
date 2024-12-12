/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'fortifiable_food_items',
    },
  },
})
export class FortifiableFoodItems extends Entity {
  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,

    postgresql: {
      columnName: 'food_vehicle_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
      generated: undefined,
    },
  })
  food_vehicle_id?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    id: true,
    postgresql: {
      columnName: 'food_vehicle_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  food_vehicle_name?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,

    postgresql: {
      columnName: 'fortifiable_portion',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
      generated: undefined,
    },
  })
  fortifiable_portion?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},

    postgresql: {
      columnName: 'food_genus_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  food_genus_id?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},

    postgresql: {
      columnName: 'food_genus_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  food_genus_name?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,

    postgresql: {
      columnName: 'food_group_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
      generated: undefined,
    },
  })
  food_group_id?: number;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'lsff',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  LSFF?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'bio',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  BIO?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'fert',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  FERT?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<FortifiableFoodItems>) {
    super(data);
  }
}

export interface FortifiableFoodItemsRelations {
  // describe navigational properties here
}

export type FortifiableFoodItemsWithRelations = FortifiableFoodItems &
  FortifiableFoodItemsRelations;
