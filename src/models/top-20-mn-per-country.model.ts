import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    hiddenProperties: ['dataSourceId', 'fctSourceId', 'foodGenusId'],
    postgresql: {schema: process.env.DB_SCHEMA, table: 'top20_mn_per_country'}
  }
})
export class Top20MnPerCountry extends Entity {
  @property({
    type: 'string',
    id: true,
    postgresql: {columnName: 'country_id', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  countryId?: string;

  @property({
    type: 'number',
    id: true,
    scale: 0,
    postgresql: {columnName: 'fct_source_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  fctSourceId?: number;

  @property({
    type: 'number',
    id: true,
    scale: 0,
    postgresql: {columnName: 'data_source_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  dataSourceId?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'mn_name', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  mnName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'food_genus_id', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  foodGenusId?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'mn_consumed_per_day', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  mnConsumedPerDay?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'ranking', dataType: 'bigint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  ranking?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'food_name', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  foodName?: string;

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

export type Top20MnPerCountryWithRelations = Top20MnPerCountry & Top20MnPerCountryRelations;
