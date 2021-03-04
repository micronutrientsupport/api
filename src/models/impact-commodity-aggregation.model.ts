import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: process.env.DB_SCHEMA, table: 'impact_commodity_aggregation'}
  }
})
export class ImpactCommodityAggregation extends Entity {
  @property({
    type: 'string',
    id: true,
    postgresql: {columnName: 'nutrient', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nutrient?: string;

  @property({
    type: 'string',
    id: true,
    postgresql: {columnName: 'country', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  country?: string;

  @property({
    type: 'string',
    id: true,
    postgresql: {columnName: 'scenario', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  scenario?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'commodity', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  commodity?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'year', dataType: 'smallint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  year?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'value', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  value?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'rank', dataType: 'bigint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  rank?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ImpactCommodityAggregation>) {
    super(data);
  }
}

export interface ImpactCommodityAggregationRelations {
  // describe navigational properties here
}

export type ImpactCommodityAggregationWithRelations = ImpactCommodityAggregation & ImpactCommodityAggregationRelations;
