import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'intervention_premix_calculator',
    },
  },
})
export class InterventionPremixCalculator extends Entity {
  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    id: true,
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
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'fortificant_micronutrient',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  fortificantMicronutrient?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'fortificant_compound',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  fortificantCompound?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    id: true,
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
      columnName: 'fortificant_activity',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  fortificantActivity?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'fortification_level',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  fortificationLevel?: number;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionPremixCalculator>) {
    super(data);
  }
}

export interface InterventionPremixCalculatorRelations {
  // describe navigational properties here
}

export type InterventionPremixCalculatorWithRelations =
  InterventionPremixCalculator & InterventionPremixCalculatorRelations;
