import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'andan-api-dev2', table: 'country_intake_geojson'}
  }
})
export class CountryIntakeGeojson extends Entity {
  @property({
    type: 'string',
    id: true,
    postgresql: {columnName: 'country_id', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  countryId?: string;

  @property({
    type: 'number',
    id: true,
    scale: 0,
    postgresql: {columnName: 'fct_source_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  fctSourceId?: number;

  @property({
    type: 'number',
    id: true,
    scale: 0,
    postgresql: {columnName: 'data_source_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  dataSourceId?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'mn_name', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  mnName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'mn_value', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  mnValue?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'geojson', dataType: 'json', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  geojson?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CountryIntakeGeojson>) {
    super(data);
  }
}

export interface CountryIntakeGeojsonRelations {
  // describe navigational properties here
}

export type CountryIntakeGeojsonWithRelations = CountryIntakeGeojson & CountryIntakeGeojsonRelations;
