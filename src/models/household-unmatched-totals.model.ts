import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'household_unmatched_totals',
    },
  },
})
export class HouseholdUnmatchedTotals extends Entity {
  @property({
    type: 'number',
    scale: 0,
    id: true,
    postgresql: {
      columnName: 'consumption_data_id',
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
    scale: 0,
    id: true,
    postgresql: {
      columnName: 'composition_data_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  compositionDataId?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'consumption_total_items',
      dataType: 'bigint',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  consumptionTotalItems?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'consumption_unmatched_count',
      dataType: 'bigint',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  consumptionUnmatchedCount?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'consumption_unmatched_count_percentage',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  consumptionUnmatchedCountPercentage?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HouseholdUnmatchedTotals>) {
    super(data);
  }
}

export interface HouseholdUnmatchedTotalsRelations {
  // describe navigational properties here
}

export type HouseholdUnmatchedTotalsWithRelations = HouseholdUnmatchedTotals &
  HouseholdUnmatchedTotalsRelations;
