import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: process.env.DB_SCHEMA, table: 'diet_data_sources'},
  },
})
export class DietDataSources extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    description: 'ISO 3166-1 alpha-3 code for the country or territory',
    postgresql: {
      columnName: 'country_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  countryId: string;

  @property({
    type: 'string',
    description: 'ID of the micronutrient',
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
    type: 'string',
    description:
      'The granularity of the consumption data. Either `country` or `household`',
    id: true,
    postgresql: {
      columnName: 'consumption_data_type',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  consumptionDataType?: string;

  @property({
    type: 'number',
    description:
      'The ID of the consumption data for use in subsequent requests',
    scale: 0,
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
    description:
      'The ID of the composition data for use in subsequent requests',
    scale: 0,
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
    type: 'string',
    description:
      'Human readable name for the combination of consumption and composition data',
    postgresql: {
      columnName: 'combined_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  displayName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<DietDataSources>) {
    super(data);
  }
}

export interface DietDataSourcesRelations {
  // describe navigational properties here
}

export type DietDataSourcesWithRelations = DietDataSources &
  DietDataSourcesRelations;
