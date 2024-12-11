import {Entity, model, property} from '@loopback/repository';
import {InterventionDataFields} from '../controllers/intervention.controller';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'intervention_seed_prices',
    },
  },
})
export class InterventionSeedPrices extends Entity {
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
      columnName: 'seed_prices',
      dataType: 'jsonb',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  seedPrices: InterventionDataFields[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionSeedPrices>) {
    super(data);
  }
}

export interface InterventionSeedPricesRelations {
  // describe navigational properties here
}

export type InterventionSeedPricesWithRelations = InterventionSeedPrices &
  InterventionSeedPricesRelations;
