import {Entity, model, property} from '@loopback/repository';
import {
  InterventionDataFields,
  InterventionDataFieldsSubset,
} from '../controllers/intervention.controller';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'intervention_data',
    },
  },
})
export class InterventionData extends Entity {
  @property({
    type: 'number',
    required: true,
    id: true,
    scale: 0,
    postgresql: {
      columnName: 'id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  id: number;

  @property({
    type: 'number',
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
    postgresql: {
      columnName: 'row_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  rowName?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'header1',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  header1?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'header2',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  header2?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'factor_text',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  factorText?: string;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'year_0',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year0?: number;

  @property({
    type: 'boolean',
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
    type: 'number',
    postgresql: {
      columnName: 'year_1',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year1?: number;

  @property({
    type: 'boolean',
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
    type: 'number',
    postgresql: {
      columnName: 'year_2',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year2?: number;

  @property({
    type: 'boolean',
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
    type: 'number',
    postgresql: {
      columnName: 'year_3',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year3?: number;

  @property({
    type: 'boolean',
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
    type: 'number',
    postgresql: {
      columnName: 'year_4',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year4?: number;

  @property({
    type: 'boolean',
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
    type: 'number',
    postgresql: {
      columnName: 'year_5',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year5?: number;

  @property({
    type: 'boolean',
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
    type: 'number',
    postgresql: {
      columnName: 'year_6',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year6?: number;

  @property({
    type: 'boolean',
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
    type: 'number',
    postgresql: {
      columnName: 'year_7',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year7?: number;

  @property({
    type: 'boolean',
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
    type: 'number',
    postgresql: {
      columnName: 'year_8',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year8?: number;

  @property({
    type: 'boolean',
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
    type: 'number',
    postgresql: {
      columnName: 'year_9',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  year9?: number;

  @property({
    type: 'boolean',
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
    postgresql: {
      columnName: 'notes',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  notes?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionData>) {
    if (data && Object.prototype.hasOwnProperty.call(data, 'targetVal')) {
      data.year0 = data['targetVal'];
    }
    super(data);
  }
}

@model({
  settings: {
    idInjection: false,
  },
})
export class InterventionUpdateDelta extends Entity {
  @property({
    type: 'number',
    scale: 0,
  })
  rowIndex: number;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'number',
  })
  year0?: number;

  @property({
    type: 'number',
  })
  year0Overriden?: boolean;

  @property({
    type: 'number',
  })
  year1?: number;

  @property({
    type: 'number',
  })
  year1Overriden?: boolean;

  @property({
    type: 'number',
  })
  year2?: number;

  @property({
    type: 'number',
  })
  year2Overriden?: boolean;

  @property({
    type: 'number',
  })
  year3?: number;

  @property({
    type: 'number',
  })
  year3Overriden?: boolean;

  @property({
    type: 'number',
  })
  year4?: number;

  @property({
    type: 'number',
  })
  year4Overriden?: boolean;

  @property({
    type: 'number',
  })
  year5?: number;

  @property({
    type: 'number',
  })
  year5Overriden?: boolean;

  @property({
    type: 'number',
  })
  year6?: number;

  @property({
    type: 'number',
  })
  year6Overriden?: boolean;

  @property({
    type: 'number',
  })
  year7?: number;

  @property({
    type: 'number',
  })
  year7Overriden?: boolean;

  @property({
    type: 'number',
  })
  year8?: number;

  @property({
    type: 'number',
  })
  year8Overriden?: boolean;

  @property({
    type: 'number',
  })
  year9?: number;

  @property({
    type: 'number',
  })
  year9Overriden?: boolean;
}

@model({
  settings: {
    idInjection: false,
  },
})
export class InterventionDataAggregate extends Entity {
  @property({
    type: 'number',
    id: true,
    scale: 0,
  })
  public interventionId: number;

  @property({
    type: 'object',
    postgresql: {
      columnName: 'baseline_assumptions',
      dataType: 'json',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  baselineAssumptions?: {
    potentiallyFortified: {};
    actuallyFortified: {};
  };

  @property({
    type: 'string',
    postgresql: {
      columnName: 'food_vehicle_standard',
      dataType: 'ARRAY',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  foodVehicleStandard?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'industry_information',
      dataType: 'jsonb',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  industryInformation?: InterventionDataFields[];

  @property({
    type: 'string',
    postgresql: {
      columnName: 'monitoring_information',
      dataType: 'jsonb',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  monitoringInformation?: InterventionDataFields[];

  @property({
    type: 'string',
    postgresql: {
      columnName: 'startup_scaleup_costs',
      dataType: 'ARRAY',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  startupScaleupCosts?: {
    category: string;
    costs: {
      section: string;
      costBreakdown: InterventionDataFieldsSubset[];
      year0Total: number;
      year1Total: number;
    }[];
  }[];

  @property({
    type: 'string',
    postgresql: {
      columnName: 'recurring_costs',
      dataType: 'ARRAY',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  recurringCosts?: {
    category: string;
    costs: {
      section: string;
      costBreakdown: InterventionDataFields[];
      year0Total: number;
      year1Total: number;
      year2Total: number;
      year3Total: number;
      year4Total: number;
      year5Total: number;
      year6Total: number;
      year7Total: number;
      year8Total: number;
      year9Total: number;
    }[];
  }[];

  constructor(data?: Partial<InterventionDataAggregate>) {
    super(data);
  }
}

export interface InterventionDataRelations {
  // describe navigational properties here
}

export type InterventionDataWithRelations = InterventionData &
  InterventionDataRelations;
