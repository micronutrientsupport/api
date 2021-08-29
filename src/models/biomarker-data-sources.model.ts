import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'bmgf', table: 'biomarker_data_sources'},
  },
})
export class BiomarkerDataSources extends Entity {
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
    description: 'Name of the biomarker measured',
    postgresql: {
      columnName: 'biomarker_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  biomarkerName?: string;

  @property({
    type: 'string',
    description: 'ID of the corresponding micronutrient for the biomarker',
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
    description: 'The ID of the biomarker survey',
    scale: 0,
    postgresql: {
      columnName: 'survey_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  surveyId?: number;

  @property({
    type: 'string',
    description: 'Human readable name of the biomarker survey',
    postgresql: {
      columnName: 'survey_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  surveyName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BiomarkerDataSources>) {
    super(data);
  }
}

export interface BiomarkerDataSourcesRelations {
  // describe navigational properties here
}

export type BiomarkerDataSourcesWithRelations = BiomarkerDataSources &
  BiomarkerDataSourcesRelations;
