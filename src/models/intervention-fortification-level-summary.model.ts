/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'intervention_fortification_level_summary',
    },
  },
})
export class InterventionFortificationLevelSummary extends Entity {
  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    id: true,
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
      columnName: 'Year',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  Year?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    postgresql: {
      columnName: 'fortification_vehicle_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
      generated: undefined,
    },
  })
  fortification_vehicle_id?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'fortification_vehicle_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  fortification_vehicle_name?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'perc_fortifiable',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  perc_fortifiable?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'perc_fortified',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  perc_fortified?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'perc_average_fortification_level',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  perc_average_fortification_level?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'Ca',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  Ca?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'I',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  I?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'Fe',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  Fe?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'A',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  A?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'B12',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  B12?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'B2',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  B2?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'B3',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  B3?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'B9',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  B9?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'D',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  D?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'E',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  E?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'Zn',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  Zn?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionFortificationLevelSummary>) {
    super(data);
  }
}

export interface InterventionFortificationLevelSummaryRelations {
  // describe navigational properties here
}

export type InterventionFortificationLevelSummaryWithRelations =
  InterventionFortificationLevelSummary &
    InterventionFortificationLevelSummaryRelations;
