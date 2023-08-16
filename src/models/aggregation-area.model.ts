import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'bmgf', table: 'aggregation_area'},
  },
})
export class AggregationArea extends Entity {
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
  uid: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'gid',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  id?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  name?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'country',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  country?: string;

  @property({
    type: 'string',
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

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'admin_level',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  adminLevel?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'parent',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  parent?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'geometry',
      dataType: 'USER-DEFINED',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  geometry?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AggregationArea>) {
    super(data);
  }
}

export interface AggregationAreaRelations {
  // describe navigational properties here
}

export type AggregationAreaWithRelations = AggregationArea &
  AggregationAreaRelations;
