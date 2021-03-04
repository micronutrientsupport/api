import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: process.env.DB_SCHEMA, table: 'impact_food_group_aggregation'}
  }
})
export class ImpactFoodGroupAggregation extends Entity {
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
    postgresql: {columnName: 'food_group', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  foodGroup?: string;

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

  constructor(data?: Partial<ImpactFoodGroupAggregation>) {
    super(data);
  }
}

export interface ImpactFoodGroupAggregationRelations {
  // describe navigational properties here
}

export type ImpactFoodGroupAggregationWithRelations = ImpactFoodGroupAggregation & ImpactFoodGroupAggregationRelations;
