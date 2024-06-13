import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'intervention_projected_households',
    },
  },
})
export class InterventionProjectedHouseholds extends Entity {
  @property({
    type: 'string',
    id: true,
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'country_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  countryId?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  name?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    postgresql: {
      columnName: 'admin_level',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
      generated: undefined,
    },
  })
  adminLevel?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2021',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2021?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2022',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2022?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2023',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2023?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2024',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2024?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2025',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2025?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2026',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2026?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2027',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2027?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2028',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2028?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2029',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2029?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2030',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2030?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2031',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2031?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2032',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2032?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2033',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2033?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2034',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2034?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 53,
    postgresql: {
      columnName: 'population_2035',
      dataType: 'float',
      dataLength: null,
      dataPrecision: 53,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  population2035?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'source',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  source?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionProjectedHouseholds>) {
    super(data);
  }
}

export interface InterventionProjectedHouseholdsRelations {
  // describe navigational properties here
}

export type InterventionProjectedHouseholdsWithRelations =
  InterventionProjectedHouseholds & InterventionProjectedHouseholdsRelations;
