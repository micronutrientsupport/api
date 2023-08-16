import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'country_consumption_fctlist_matches',
    },
  },
})
export class CountryConsumptionFctlistMatches extends Entity {
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
    type: 'string',
    id: true,
    postgresql: {
      columnName: 'micronutrient_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  micronutrientId?: string;

  @property({
    type: 'number',
    scale: 0,
    id: true,
    postgresql: {
      columnName: 'composition_list_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  compositionListId?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'composition_source_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  compositionSourceId?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'composition_source_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  compositionSourceName?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'consumption_matched_count',
      dataType: 'bigint',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  consumptionMatchedCount?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'consumption_total_count',
      dataType: 'bigint',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  consumptionTotalCount?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'consumption_matched_count_percentage',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  consumptionMatchedCountPercentage?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'consumption_matched_weight',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  consumptionMatchedWeight?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'consumption_total_weight',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  consumptionTotalWeight?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'consumption_matched_weight_percentage',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  consumptionMatchedWeightPercentage?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CountryConsumptionFctlistMatches>) {
    super(data);
  }
}

export interface CountryConsumptionFctlistMatchesRelations {
  // describe navigational properties here
}

export type CountryConsumptionFctlistMatchesWithRelations = CountryConsumptionFctlistMatches &
  CountryConsumptionFctlistMatchesRelations;
