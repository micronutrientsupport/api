import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'intervention_list',
    },
  },
})
export class InterventionList extends Entity {
  @property({
    type: 'number',
    scale: 0,
    id: true,
    postgresql: {
      columnName: 'id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  id?: number;

  @property({
    type: 'string',
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
    type: 'string',
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
    type: 'string',
    postgresql: {
      columnName: 'fortification_type_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  fortificationTypeId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'fortification_type_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  fortificationTypeName?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'program_status',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  programStatus?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'food_vehicle_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  foodVehicleId?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'food_vehicle_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  foodVehicleName?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'base_year',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  baseYear?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'ten_year_total_cost',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  tenYearTotalCost?: number;

  @property({
    type: 'date',
    description: 'When was the intervention last edited',
    postgresql: {
      columnName: 'last_edited',
      dataType: 'date',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  lastEdited?: string;

  @property({
    type: 'boolean',
    description: 'Is the intervention a template',
    postgresql: {
      columnName: 'is_premade',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  isTemplateIntervention?: boolean;

  @property({
    type: 'number',
    scale: 0,
    id: true,
    postgresql: {
      columnName: 'parent_intervention',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  parentIntervention?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionList>) {
    super(data);
  }
}

export interface InterventionListRelations {
  // describe navigational properties here
}

export type InterventionListWithRelations = InterventionList &
  InterventionListRelations;
