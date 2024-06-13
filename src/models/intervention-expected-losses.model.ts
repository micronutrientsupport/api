import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'intervention_expected_losses',
    },
  },
})
export class InterventionExpectedLosses extends Entity {
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
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    postgresql: {
      columnName: 'intervention_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
      generated: undefined,
    },
  })
  interventionId: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'micronutrient_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  micronutrientId?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'expected_losses',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  expectedLosses?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'expected_losses_default',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  expectedLossesDefault?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'source',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  source?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionExpectedLosses>) {
    super(data);
  }
}

export interface InterventionExpectedLossesRelations {
  // describe navigational properties here
}

export type InterventionExpectedLossesWithRelations =
  InterventionExpectedLosses & InterventionExpectedLossesRelations;
