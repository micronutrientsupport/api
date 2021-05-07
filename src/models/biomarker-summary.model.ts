import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'andan-biomarker', table: 'biomarker_summary'}
  }
})
export class BiomarkerSummary extends Entity {
  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'survey_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  surveyId?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'group_id', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  groupId?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'region_name', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  regionName?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'wealth_quintile', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  wealthQuintile?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'urbanity', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  urbanity?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'age_in_months', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  ageInMonths?: number;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'is_pregnant', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  isPregnant?: boolean;

  @property({
    type: 'number',
    precision: 5,
    scale: 2,
    postgresql: {columnName: 'haemoglobin', dataType: 'numeric', dataLength: null, dataPrecision: 5, dataScale: 2, nullable: 'YES'},
  })
  haemoglobin?: number;

  @property({
    type: 'number',
    precision: 5,
    scale: 2,
    postgresql: {columnName: 'ferritin', dataType: 'numeric', dataLength: null, dataPrecision: 5, dataScale: 2, nullable: 'YES'},
  })
  ferritin?: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 2,
    postgresql: {columnName: 'stfr', dataType: 'numeric', dataLength: null, dataPrecision: 3, dataScale: 2, nullable: 'YES'},
  })
  stfr?: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 2,
    postgresql: {columnName: 'rbp', dataType: 'numeric', dataLength: null, dataPrecision: 3, dataScale: 2, nullable: 'YES'},
  })
  rbp?: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 2,
    postgresql: {columnName: 'serum_retinol', dataType: 'numeric', dataLength: null, dataPrecision: 3, dataScale: 2, nullable: 'YES'},
  })
  serumRetinol?: number;

  @property({
    type: 'number',
    precision: 4,
    scale: 1,
    postgresql: {columnName: 'rbc_folate', dataType: 'numeric', dataLength: null, dataPrecision: 4, dataScale: 1, nullable: 'YES'},
  })
  rbcFolate?: number;

  @property({
    type: 'number',
    precision: 5,
    scale: 1,
    postgresql: {columnName: 'vitamin_b12', dataType: 'numeric', dataLength: null, dataPrecision: 5, dataScale: 1, nullable: 'YES'},
  })
  vitaminB12?: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 1,
    postgresql: {columnName: 'zinc', dataType: 'numeric', dataLength: null, dataPrecision: 3, dataScale: 1, nullable: 'YES'},
  })
  zinc?: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 2,
    postgresql: {columnName: 'crp', dataType: 'numeric', dataLength: null, dataPrecision: 3, dataScale: 2, nullable: 'YES'},
  })
  crp?: number;

  @property({
    type: 'number',
    precision: 3,
    scale: 2,
    postgresql: {columnName: 'agp', dataType: 'numeric', dataLength: null, dataPrecision: 3, dataScale: 2, nullable: 'YES'},
  })
  agp?: number;

  @property({
    type: 'number',
    precision: 5,
    scale: 2,
    postgresql: {columnName: 'iodine', dataType: 'numeric', dataLength: null, dataPrecision: 5, dataScale: 2, nullable: 'YES'},
  })
  iodine?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BiomarkerSummary>) {
    super(data);
  }
}

export interface BiomarkerSummaryRelations {
  // describe navigational properties here
}

export type BiomarkerSummaryWithRelations = BiomarkerSummary & BiomarkerSummaryRelations;
