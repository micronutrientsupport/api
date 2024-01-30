import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: process.env.DB_SCHEMA, table: 'fortification_level'},
  },
})
export class FortificationLevel extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    id: 1,
    postgresql: {
      columnName: 'id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
      generated: undefined,
    },
  })
  id: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    postgresql: {
      columnName: 'intervention_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
      generated: undefined,
    },
  })
  interventionId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    postgresql: {
      columnName: 'fortificant_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
      generated: undefined,
    },
  })
  fortificantId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'fortificant_amount',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  fortificantAmount?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'fortificant_proportion',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  fortificantProportion?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'fortificant_price',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  fortificantPrice?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'target_level',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  targetLevel?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<FortificationLevel>) {
    super(data);
  }
}

export interface FortificationLevelRelations {
  // describe navigational properties here
}

export type FortificationLevelWithRelations = FortificationLevel &
  FortificationLevelRelations;
