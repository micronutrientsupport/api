import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: 'bmgf',
      table: 'intervention_monitoring_information',
    },
  },
})
export class InterventionMonitoringInformation extends Entity {
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
      columnName: 'monitoring_information',
      dataType: 'jsonb',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  monitoringInformation?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionMonitoringInformation>) {
    super(data);
  }
}

export interface InterventionMonitoringInformationRelations {
  // describe navigational properties here
}

export type InterventionMonitoringInformationWithRelations = InterventionMonitoringInformation &
  InterventionMonitoringInformationRelations;