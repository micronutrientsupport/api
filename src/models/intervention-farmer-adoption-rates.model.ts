import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'intervention_farmer_adoption_rates',
    },
  },
})
export class InterventionFarmerAdoptionRates extends Entity {
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
      columnName: 'farmer_adoption_rates',
      dataType: 'json',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  farmerAdoptionRates?: {
    adoptionRateLocal: {};
    adoptionRateHybrid: {};
    adoptionRateRecycled: {};
  };

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionFarmerAdoptionRates>) {
    super(data);
  }
}

export interface InterventionFarmerAdoptionRatesRelations {
  // describe navigational properties here
}

export type InterventionFarmerAdoptionRatesWithRelations =
  InterventionFarmerAdoptionRates & InterventionFarmerAdoptionRatesRelations;
