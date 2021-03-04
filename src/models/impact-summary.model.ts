import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: process.env.DB_SCHEMA, table: 'impact_summary'}
  }
})
export class ImpactSummary extends Entity {
  @property({
    type: 'string',
    id: true,
    postgresql: {columnName: 'country', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  country?: string;

  @property({
    type: 'string',
    id: true,
    postgresql: {columnName: 'micronutrient', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  micronutrient?: string;

  @property({
    type: 'string',
    id: true,
    postgresql: {columnName: 'scenario', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  scenario?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'target', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  target?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'reference_val', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  referenceVal?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'reference_year', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  referenceYear?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'intersect_year', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  intersectYear?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'difference', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  difference?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ImpactSummary>) {
    super(data);
  }
}

export interface ImpactSummaryRelations {
  // describe navigational properties here
}

export type ImpactSummaryWithRelations = ImpactSummary & ImpactSummaryRelations;
