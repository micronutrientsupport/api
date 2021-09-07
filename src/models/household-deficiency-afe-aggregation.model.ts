import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'household_deficiency_afe_aggregation',
    },
  },
})
export class HouseholdDeficiencyAfeAggregation extends Entity {
  @property({
    type: 'number',
    description:
      'The ID of the consumption data used for matching and calculations',
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
  consumptionDataId?: number;

  @property({
    type: 'number',
    description:
      'The ID of the composition data used for matching and calculations',
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
  compositionDataId?: number;

  @property({
    type: 'string',
    description: 'ISO 3166-1 alpha-3 code for the country or territory',
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
  countryId?: string;

  @property({
    type: 'string',
    description: 'The ID of the area used for aggregating household data',
    postgresql: {
      columnName: 'aggregation_area_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  aggregationAreaId?: string;

  @property({
    type: 'string',
    description:
      'The human readable name of the area used for aggregating household data',
    postgresql: {
      columnName: 'aggregation_area_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  aggregationAreaName?: string;

  @property({
    type: 'string',
    description:
      'GeoJSON representation of the boundary of the aggregation area',
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
    description: 'ID of the micronutrient',
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
    description: 'The units for the micronutrient measurement',
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
    description:
      'Median micronutrient availability per household within the aggregation area',
    postgresql: {
      columnName: 'dietary_supply',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  dietarySupply?: number;

  @property({
    type: 'number',
    description: 'The number of sampled households within the aggregation area',
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
    description:
      'The number of the sampled households which are deficient in the micronutrient based on AFE',
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
    description:
      'The percentage of the sampled households which are deficient in the micronutrient based on AFE',
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

  constructor(data?: Partial<HouseholdDeficiencyAfeAggregation>) {
    super(data);
  }
}

export interface HouseholdDeficiencyAfeAggregationRelations {
  // describe navigational properties here
}

export type HouseholdDeficiencyAfeAggregationWithRelations = HouseholdDeficiencyAfeAggregation &
  HouseholdDeficiencyAfeAggregationRelations;
