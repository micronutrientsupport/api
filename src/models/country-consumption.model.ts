import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'bmgf', table: 'country_consumption'},
  },
})
export class CountryConsumption extends Entity {
  @property({
    type: 'string',
    id: true,
    postgresql: {
      columnName: 'food_genus_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  foodGenusId?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'data_source_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  consumptionDataId?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 3,
    postgresql: {
      columnName: 'amount_consumed_in_g',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 10,
      dataScale: 3,
      nullable: 'YES',
    },
  })
  consumptionValue?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CountryConsumption>) {
    super(data);
  }
}

export interface CountryConsumptionRelations {
  // describe navigational properties here
}

export type CountryConsumptionWithRelations = CountryConsumption &
  CountryConsumptionRelations;
