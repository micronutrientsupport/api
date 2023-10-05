import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: process.env.DB_SCHEMA, table: 'intervention'},
  },
})
export class Intervention extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    id: 1,
    postgresql: {
      columnName: 'id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
      generated: undefined,
    },
  })
  id: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'intervention_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  interventionName?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'description',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  description?: string;

  @property({
    type: 'string',
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
      columnName: 'app_user_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  userId?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    postgresql: {
      columnName: 'data_citation_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
      generated: undefined,
    },
  })
  dataCitationId?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'focus_micronutrient',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  focusMicronutrient?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'focus_geography',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  focusGeography?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    postgresql: {
      columnName: 'food_vehicle_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
      generated: undefined,
    },
  })
  foodVehicleId?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'fortification_type_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  fortificationTypeId?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'program_status',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  programStatus?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'file_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  fileName?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    postgresql: {
      columnName: 'base_year',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
      generated: undefined,
    },
  })
  baseYear?: number;

  @property({
    type: 'boolean',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'is_premade',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  isTemplateIntervention?: boolean;

  @property({
    type: 'boolean',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'is_locked',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  isLocked?: boolean;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    postgresql: {
      columnName: 'parent_intervention',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
      generated: undefined,
    },
  })
  parentIntervention?: number;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'last_edited',
      dataType: 'timestamp without time zone',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  lastEdited?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Intervention>) {
    super(data);
  }
}

export interface InterventionRelations {
  // describe navigational properties here
}

export type InterventionWithRelations = Intervention & InterventionRelations;
