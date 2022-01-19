import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: 'bmgf',
      table: 'intervention_startup_scaleup_costs',
    },
  },
})
export class InterventionStartupScaleupCosts extends Entity {
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
      columnName: 'startup_scaleup_costs',
      dataType: 'ARRAY',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  startupScaleupCosts?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionStartupScaleupCosts>) {
    super(data);
  }
}

export interface InterventionStartupScaleupCostsRelations {
  // describe navigational properties here
}

export type InterventionStartupScaleupCostsWithRelations = InterventionStartupScaleupCosts &
  InterventionStartupScaleupCostsRelations;