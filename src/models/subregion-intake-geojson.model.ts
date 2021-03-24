import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'andan-api-dev2', table: 'subregion_intake_geojson'}
  }
})
export class SubregionIntakeGeojson extends Entity {
  @property({
    type: 'string',
    id: true,
    postgresql: {columnName: 'country_id', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  countryId?: string;

  @property({
    type: 'number',
    scale: 0,
    id: true,
    postgresql: {columnName: 'fct_source_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  fctSourceId?: number;

  @property({
    type: 'number',
    scale: 0,
    id: true,
    postgresql: {columnName: 'survey_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  surveyId?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'geojson', dataType: 'json', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  geojson?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SubregionIntakeGeojson>) {
    super(data);
  }
}

export interface SubregionIntakeGeojsonRelations {
  // describe navigational properties here
}

export type SubregionIntakeGeojsonWithRelations = SubregionIntakeGeojson & SubregionIntakeGeojsonRelations;
