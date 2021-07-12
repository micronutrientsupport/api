import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: 'bmgf-andan-normalise-household-consumption',
      table: 'household_deficiency_aggregation',
    },
  },
})
export class HouseholdDeficiencyAggregation extends Entity {
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
  surveyId?: number;

  @property({
    type: 'number',
    scale: 0,
    id: true,
    postgresql: {
      columnName: 'fct_source_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  fctSourceId?: number;

  @property({
    type: 'string',
    id: true,
    postgresql: {
      columnName: 'country',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  country?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'subregion_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  subregionId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'subregion_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  subregionName?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'geometry',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  geometry?: string;

  @property({
    type: 'string',
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
    postgresql: {
      columnName: 'unit',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  unit?: string;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'median_supply',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  medianSupply?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'household_count',
      dataType: 'bigint',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  householdCount?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'deficient_count',
      dataType: 'bigint',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  deficientCount?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'deficient_percentage',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  deficientPercentage?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HouseholdDeficiencyAggregation>) {
    super(data);
  }
}

export interface HouseholdDeficiencyAggregationRelations {
  // describe navigational properties here
}

export type HouseholdDeficiencyAggregationWithRelations = HouseholdDeficiencyAggregation &
  HouseholdDeficiencyAggregationRelations;
