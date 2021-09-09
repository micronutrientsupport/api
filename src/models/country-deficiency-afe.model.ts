import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'bmgf', table: 'country_deficiency_afe'},
  },
})
export class CountryDeficiencyAfe extends Entity {
  @property({
    type: 'string',
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
    postgresql: {
      columnName: 'aggregation_area_type',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  aggregationAreaType?: string;

  @property({
    type: 'number',
    scale: 0,
    id: true,
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
      columnName: 'country_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  countryId?: string;

  @property({
    type: 'object',
    required: true,
    description:
      'GeoJSON representation of the boundary of the country or territory',
    postgresql: {
      columnName: 'geometry',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  geometry: object;

  @property({
    type: 'number',
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
      columnName: 'deficient_value',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  deficientValue?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'deficient_percentage',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  deficientPercentage?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CountryDeficiencyAfe>) {
    super(data);
  }
}

export interface CountryDeficiencyAfeRelations {
  // describe navigational properties here
}

export type CountryDeficiencyAfeWithRelations = CountryDeficiencyAfe &
  CountryDeficiencyAfeRelations;
