import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: 'bmgf-andan_intervention-user-cost',
      table: 'intervention_thresholds',
    },
  },
})
export class InterventionThresholds extends Entity {
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
      columnName: 'unit_adequacy',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  unitAdequacy?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'unit_excess',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  unitExcess?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'unit_cnd',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  unitCnd?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'reference_person',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  referencePerson?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'ear',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
      generated: undefined,
    },
  })
  ear?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'ear_default',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
      generated: undefined,
    },
  })
  earDefault?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'ul',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
      generated: undefined,
    },
  })
  ul?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'ul_default',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
      generated: undefined,
    },
  })
  ulDefault?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'cnd',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
      generated: undefined,
    },
  })
  cnd?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'cul',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
      generated: undefined,
    },
  })
  cul?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'energy',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
      generated: undefined,
    },
  })
  energy?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 20,
    scale: 10,
    postgresql: {
      columnName: 'energy_default',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: 20,
      dataScale: 10,
      nullable: 'YES',
      generated: undefined,
    },
  })
  energyDefault?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'notes',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
      generated: undefined,
    },
  })
  notes?: string;

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

  constructor(data?: Partial<InterventionThresholds>) {
    super(data);
  }
}

export interface InterventionThresholdsRelations {
  // describe navigational properties here
}

export type InterventionThresholdsWithRelations = InterventionThresholds &
  InterventionThresholdsRelations;
