import {JSONObject} from '@loopback/core';
import {Entity, model, property} from '@loopback/repository';
import {InterventionDataFieldsSubset} from '../controllers/intervention.controller';

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
  summaryCosts?: {
    category: string;
    costs: {
      section: string;
      costBreakdown: InterventionDataFieldsSubset[];
      year0Total: number;
      year0TotalFormula: string | JSONObject;
      year1Total: number;
      year1TotalFormula: string | JSONObject;
    }[];
  }[];

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
