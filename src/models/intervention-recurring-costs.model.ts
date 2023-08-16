import {Entity, model, property} from '@loopback/repository';
import {InterventionDataFields} from '../controllers/intervention.controller';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'intervention_recurring_costs',
    },
  },
})
export class InterventionRecurringCosts extends Entity {
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
      columnName: 'recurring_costs',
      dataType: 'ARRAY',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  recurringCosts?: {
    category: string;
    costs: {
      section: string;
      costBreakdown: InterventionDataFields[];
      year0Total: number;
      year1Total: number;
      year2Total: number;
      year3Total: number;
      year4Total: number;
      year5Total: number;
      year6Total: number;
      year7Total: number;
      year8Total: number;
      year9Total: number;
    }[];
  }[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionRecurringCosts>) {
    super(data);
  }
}

export interface InterventionRecurringCostsRelations {
  // describe navigational properties here
}

export type InterventionRecurringCostsWithRelations = InterventionRecurringCosts &
  InterventionRecurringCostsRelations;
