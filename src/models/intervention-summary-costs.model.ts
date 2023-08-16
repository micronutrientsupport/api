import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'intervention_summary_costs',
    },
  },
})
export class InterventionSummaryCosts extends Entity {
  @property({
    type: 'number',
    scale: 0,
    id: true,
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
      columnName: 'summary_costs',
      dataType: 'json',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  summaryCosts?: string;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'discount_rate',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  discountRate?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'summary_costs_discounted',
      dataType: 'json',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  summaryCostsDiscounted?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionSummaryCosts>) {
    super(data);
  }
}

export interface InterventionSummaryCostsRelations {
  // describe navigational properties here
}

export type InterventionSummaryCostsWithRelations = InterventionSummaryCosts &
  InterventionSummaryCostsRelations;
