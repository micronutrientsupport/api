import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: process.env.DB_SCHEMA, table: 'impact_summary'},
  },
})
export class ImpactSummary extends Entity {
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
  country?: string;

  @property({
    type: 'string',
    description: 'ID of the micronutrient',
    id: true,
    postgresql: {
      columnName: 'micronutrient',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  micronutrient?: string;

  @property({
    type: 'string',
    description: 'ID for the projection scenario used',
    id: true,
    postgresql: {
      columnName: 'scenario',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  scenario?: string;

  @property({
    type: 'number',
    description:
      'Reccomended dietary supply of the micronutrient per capita per day',
    scale: 0,
    postgresql: {
      columnName: 'recommended',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  recommended?: number;

  @property({
    type: 'number',
    description:
      'The projected availability of the micronutrient for the `referenceYear`',
    postgresql: {
      columnName: 'daily_reference_val',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  referenceVal?: number;

  @property({
    type: 'number',
    description:
      'Reference year for the `referenceVal` projected availability value',
    postgresql: {
      columnName: 'reference_year',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  referenceYear?: number;

  @property({
    type: 'string',
    description:
      "The projected year that dietary supply will reach the `recommended` value under the given scenario given 'business as usual'",
    postgresql: {
      columnName: 'intersect_year',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  intersectYear?: string;

  @property({
    type: 'number',
    description:
      'The percentage difference between the `referenceVal` and the `reccomended` supply value',
    postgresql: {
      columnName: 'difference',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  difference?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ImpactSummary>) {
    super(data);
  }
}

export interface ImpactSummaryRelations {
  // describe navigational properties here
}

export type ImpactSummaryWithRelations = ImpactSummary & ImpactSummaryRelations;
