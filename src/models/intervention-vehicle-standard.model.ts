import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: 'andan-intervention-costs',
      table: 'intervention_vehicle_standard',
    },
  },
})
export class InterventionVehicleStandard extends Entity {
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
      columnName: 'food_vehicle_standard',
      dataType: 'ARRAY',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  foodVehicleStandard?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionVehicleStandard>) {
    super(data);
  }
}

export interface InterventionVehicleStandardRelations {
  // describe navigational properties here
}

export type InterventionVehicleStandardWithRelations = InterventionVehicleStandard &
  InterventionVehicleStandardRelations;
