import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'bmgf', table: 'tmp_region_consumption'}
  }
})
export class TmpRegionConsumption extends Entity {
  @property({
    type: 'string',
    id: true,
    postgresql: {columnName: 'region', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  region?: string;

  @property({
    type: 'number',
    id: true,
    postgresql: {columnName: 'vit_a', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  vitA?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TmpRegionConsumption>) {
    super(data);
  }
}

export interface TmpRegionConsumptionRelations {
  // describe navigational properties here
}

export type TmpRegionConsumptionWithRelations = TmpRegionConsumption & TmpRegionConsumptionRelations;
