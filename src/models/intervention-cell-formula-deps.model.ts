import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'intervention_formulae',
    },
  },
})
export class InterventionCellFormulaDeps extends Entity {
  @property({
    type: 'number',
    id: true,
    jsonSchema: {nullable: true},
    scale: 0,
    postgresql: {
      columnName: 'intervention_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  interventionId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    postgresql: {
      columnName: 'row_index',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  rowIndex?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'year_0_formula',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year0Formula?: string;

  @property({
    type: 'boolean',
    description: 'Is the formula overriden?',
    postgresql: {
      columnName: 'year_0_overriden',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year0Overriden?: boolean;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'year_1_formula',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year1Formula?: string;

  @property({
    type: 'boolean',
    description: 'Is the formula overriden?',
    postgresql: {
      columnName: 'year_1_overriden',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year1Overriden?: boolean;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'year_2_formula',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year2Formula?: string;

  @property({
    type: 'boolean',
    description: 'Is the formula overriden?',
    postgresql: {
      columnName: 'year_2_overriden',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year2Overriden?: boolean;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'year_3_formula',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year3Formula?: string;

  @property({
    type: 'boolean',
    description: 'Is the formula overriden?',
    postgresql: {
      columnName: 'year_3_overriden',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year3Overriden?: boolean;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'year_4_formula',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year4Formula?: string;

  @property({
    type: 'boolean',
    description: 'Is the formula overriden?',
    postgresql: {
      columnName: 'year_4_overriden',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year4Overriden?: boolean;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'year_5_formula',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year5Formula?: string;

  @property({
    type: 'boolean',
    description: 'Is the formula overriden?',
    postgresql: {
      columnName: 'year_5_overriden',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year5Overriden?: boolean;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'year_6_formula',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year6Formula?: string;

  @property({
    type: 'boolean',
    description: 'Is the formula overriden?',
    postgresql: {
      columnName: 'year_6_overriden',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year6Overriden?: boolean;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'year_7_formula',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year7Formula?: string;

  @property({
    type: 'boolean',
    description: 'Is the formula overriden?',
    postgresql: {
      columnName: 'year_7_overriden',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year7Overriden?: boolean;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'year_8_formula',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year8Formula?: string;

  @property({
    type: 'boolean',
    description: 'Is the formula overriden?',
    postgresql: {
      columnName: 'year_8_overriden',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year8Overriden?: boolean;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'year_9_formula',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year9Formula?: string;

  @property({
    type: 'boolean',
    description: 'Is the formula overriden?',
    postgresql: {
      columnName: 'year_9_overriden',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year9Overriden?: boolean;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {
      columnName: 'dependent_rows',
      dataType: 'ARRAY',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  dependentRows?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionCellFormulaDeps>) {
    super(data);
  }
}

export interface InterventionCellFormulaDepsRelations {
  // describe navigational properties here
}

export type InterventionCellFormulaDepsWithRelations =
  InterventionCellFormulaDeps & InterventionCellFormulaDepsRelations;
