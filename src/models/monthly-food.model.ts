import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'bmgf', table: 'monthly_food'}}
})
export class MonthlyFood extends Entity {
  @property({
    type: 'number',
    postgresql: {columnName: 'percentage_mn_consumed', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  percentageMnConsumed?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'mn_name', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  mnName?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'mn_consumed', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  mnConsumed?: number;

  @property({
    type: 'number',
    precision: 53,
    postgresql: {columnName: 'month_consumed', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  monthConsumed?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'food_group_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  foodGroupId?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'fct_source_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  fctSourceId?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'survey_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  surveyId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MonthlyFood>) {
    super(data);
  }
}

export interface MonthlyFoodRelations {
  // describe navigational properties here
}

export type MonthlyFoodWithRelations = MonthlyFood & MonthlyFoodRelations;
