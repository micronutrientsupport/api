import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'impact_food_group_aggregation',
    },
  },
})
export class ImpactFoodGroupAggregation extends Entity {
  @property({
    type: 'string',
    description: 'ID of the micronutrient',
    id: true,
    postgresql: {
      columnName: 'nutrient',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  nutrient?: string;

  @property({
    type: 'string',
    description: 'ISO 3166-1 alpha-3 code for the country or territory',
    id: true,
    postgresql: {
      columnName: 'country',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  country?: string;

  @property({
    type: 'string',
    description: 'ID for the projection scenario used',
    id: true,
    postgresql: {
      columnName: 'scenario',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  scenario?: string;

  @property({
    type: 'string',
    description:
      'Name of the food group contributing to the micronutrient supply',
    postgresql: {
      columnName: 'food_group',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  foodGroup?: string;

  @property({
    type: 'number',
    description:
      'Projection year for the model run in YYYY format.  5 year increments between 2010 and 2050',
    scale: 0,
    postgresql: {
      columnName: 'year',
      dataType: 'smallint',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  year?: number;

  @property({
    type: 'number',
    description: 'Projected availability of the micronutrient in mg/capita/day',
    postgresql: {
      columnName: 'value',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  value?: number;

  @property({
    type: 'number',
    description:
      'Rank from 1-6 of level of contribution of the commodity to micronutrient supply',
    scale: 0,
    postgresql: {
      columnName: 'rank',
      dataType: 'bigint',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
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

export type ImpactFoodGroupAggregationWithRelations = ImpactFoodGroupAggregation &
  ImpactFoodGroupAggregationRelations;
