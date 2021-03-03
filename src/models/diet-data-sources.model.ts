import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'andan-bmgf2', table: 'diet_data_sources'}
  }
})
export class DietDataSources extends Entity {
  @property({
    type: 'string',
    id: true,
    postgresql: {columnName: 'country_id', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  countryId?: string;

  @property({
    type: 'string',
    id: true,
    postgresql: {columnName: 'consumption_data_type', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  consumptionDataType?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'consumption_data_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  consumptionDataId?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'composition_data_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  compositionDataId?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'name', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  name?: string;

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

export type DietDataSourcesWithRelations = DietDataSources & DietDataSourcesRelations;
