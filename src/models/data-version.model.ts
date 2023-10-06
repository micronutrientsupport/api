import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: process.env.DB_SCHEMA, table: 'data_version'},
  },
})
export class DataVersion extends Entity {
  @property({
    type: 'date',
    postgresql: {
      columnName: 'date',
      dataType: 'timestamp without time zone',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  date?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'version',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  version?: string;

  @property({
    type: 'string',
    id: true,
    postgresql: {
      columnName: 'type',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  type?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<DataVersion>) {
    super(data);
  }
}

export interface DataVersionRelations {
  // describe navigational properties here
}

export type DataVersionWithRelations = DataVersion & DataVersionRelations;
