import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: 'andan-intervention-costs',
      table: 'intervention_baseline_assumptions',
    },
  },
})
export class InterventionBaselineAssumptions extends Entity {
  @property({
    type: 'number',
    id: true,
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
    type: 'object',
    postgresql: {
      columnName: 'baseline_assumptions',
      dataType: 'json',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  baselineAssumptions?: {
    potentiallyFortified: {};
    actuallyFortified: {};
  };

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionBaselineAssumptions>) {
    super(data);
  }
}

export interface InterventionBaselineAssumptionsRelations {
  // describe navigational properties here
}

export type InterventionBaselineAssumptionsWithRelations = InterventionBaselineAssumptions &
  InterventionBaselineAssumptionsRelations;
