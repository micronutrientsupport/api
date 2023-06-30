/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'bmgf', table: 'biomarker_summary'},
  },
})
export class BiomarkerSummary extends Entity {
  @property({
    type: 'number',
    scale: 0,
    id: true,
    postgresql: {
      columnName: 'survey_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  survey_id?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'group_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  group_id?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'region',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  region: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'wealth_quintile',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  wealth_quintile?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'urbanity',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  urbanity?: string;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'altitude_in_metres',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  altitude_in_metres?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'age_in_months',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  age_in_months?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'sex',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  sex?: string;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'is_adjusted_for_smoking',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  is_adjusted_for_smoking?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'is_adjusted_for_altitude',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  is_adjusted_for_altitude?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'is_pregnant',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  is_pregnant?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'is_smoker',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  is_smoker?: boolean;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'was_fasting',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  was_fasting?: boolean;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'time_of_day_sampled',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  time_of_day_sampled?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'survey_cluster',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  survey_cluster?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'survey_strata',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  survey_strata?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'survey_weight',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  survey_weight?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'haemoglobin',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  haemoglobin?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'ferritin',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  ferritin?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'stfr',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  stfr?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'rbp',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  rbp?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'retinol',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  retinol?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'rbc_folate',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  rbc_folate?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'ps_folate',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  ps_folate?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'vitamin_b12',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  vitamin_b12?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'zinc',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  zinc?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'crp',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  crp?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'agp',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  agp?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'iodine',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
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

export type BiomarkerSummaryWithRelations = BiomarkerSummary &
  BiomarkerSummaryRelations;
