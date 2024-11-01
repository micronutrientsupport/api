import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'intervention_extra_costs',
    },
  },
})
export class InterventionExtraCosts extends Entity {
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: false},
    scale: 0,
    id: 1,
    generated: true,
    postgresql: {
      columnName: 'id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
      generated: true,
    },
  })
  id: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,

    postgresql: {
      columnName: 'intervention_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
      generated: undefined,
    },
  })
  interventionId?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},

    postgresql: {
      columnName: 'cost_type',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  costType?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},

    postgresql: {
      columnName: 'factor_text',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  factorText?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},

    postgresql: {
      columnName: 'year_0',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  year0?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},

    postgresql: {
      columnName: 'year_1',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  year1?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},

    postgresql: {
      columnName: 'year_2',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  year2?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},

    postgresql: {
      columnName: 'year_3',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  year3?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},

    postgresql: {
      columnName: 'year_4',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  year4?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},

    postgresql: {
      columnName: 'year_5',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  year5?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},

    postgresql: {
      columnName: 'year_6',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  year6?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},

    postgresql: {
      columnName: 'year_7',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  year7?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},

    postgresql: {
      columnName: 'year_8',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  year8?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},

    postgresql: {
      columnName: 'year_9',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  year9?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionExtraCosts>) {
    super(data);
  }
}

export interface InterventionExtraCostsRelations {
  // describe navigational properties here
}

export type InterventionExtraCostsWithRelations = InterventionExtraCosts &
  InterventionExtraCostsRelations;
