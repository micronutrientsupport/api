import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'intervention_values_json',
    },
  },
})
export class InterventionValuesJson extends Entity {
  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'intervention_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  interventionId?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'header1',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  header1?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'header2',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  header2?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'data',
      dataType: 'json',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  data?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionValuesJson>) {
    super(data);
  }
}

export interface InterventionValuesJsonRelations {
  // describe navigational properties here
}

export type InterventionValuesJsonWithRelations = InterventionValuesJson &
  InterventionValuesJsonRelations;
