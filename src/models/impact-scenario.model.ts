import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: process.env.DB_SCHEMA, table: 'impact_scenario'},
  },
})
export class ImpactScenario extends Entity {
  @property({
    type: 'string',
    required: true,
    description: 'Unique ID for the scenario',
    id: 1,
    postgresql: {
      columnName: 'id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  id: string;

  @property({
    type: 'string',
    description: 'Name of the scenario',
    postgresql: {
      columnName: 'name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  name?: string;

  @property({
    type: 'string',
    description: 'Short description of the scenario',
    postgresql: {
      columnName: 'brief_description',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  briefDescription?: string;

  @property({
    type: 'string',
    description: 'Extended description of the scenario',
    postgresql: {
      columnName: 'description',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  description?: string;

  @property({
    type: 'boolean',
    description: 'Whether the scenario is used as a baseline for comparison',
    postgresql: {
      columnName: 'is_baseline',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  isBaseline?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ImpactScenario>) {
    super(data);
  }
}

export interface ImpactScenarioRelations {
  // describe navigational properties here
}

export type ImpactScenarioWithRelations = ImpactScenario &
  ImpactScenarioRelations;
