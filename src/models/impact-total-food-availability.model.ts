import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'impact_total_food_availability',
    },
  },
})
export class ImpactTotalFoodAvailability extends Entity {
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
    type: 'number',
    description:
      'Projection year for the model run in YYYY format.  5 year increments between 2010 and 2050',
    scale: 0,
    id: true,
    postgresql: {
      columnName: 'year',
      dataType: 'smallint',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  year?: number;

  @property({
    type: 'string',
    id: true,
    description: 'Unique ID for the projection scenario used',
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
    description: 'Projected availability for Calcium in mg/capita/day',
    postgresql: {
      columnName: 'calcium',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  Ca?: number;

  @property({
    type: 'number',
    description:
      'Percentage difference between the projected availability for Calcium and the projected value for the previous model year',
    postgresql: {
      columnName: 'calcium_diff',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  CaDiff?: number;

  @property({
    type: 'number',
    description: 'Projected availability for B9 in mg/capita/day',
    postgresql: {
      columnName: 'folate',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  B9?: number;

  @property({
    type: 'number',
    description:
      'Percentage difference between the projected availability for B9 and the projected value for the previous model year',
    postgresql: {
      columnName: 'folate_diff',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  B9Diff?: number;

  @property({
    type: 'number',
    description: 'Projected availability for Iron in mg/capita/day',
    postgresql: {
      columnName: 'iron',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  Fe?: number;

  @property({
    type: 'number',
    description:
      'Percentage difference between the projected availability for Iron and the projected value for the previous model year',
    postgresql: {
      columnName: 'iron_diff',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  FeDiff?: number;

  @property({
    type: 'number',
    description: 'Projected availability for Magnesium in mg/capita/day',
    postgresql: {
      columnName: 'magnesium',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  Mg?: number;

  @property({
    type: 'number',
    description:
      'Percentage difference between the projected availability for Magnesium and the projected value for the previous model year',
    postgresql: {
      columnName: 'magnesium_diff',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  MgDiff?: number;

  @property({
    type: 'number',
    description: 'Projected availability for B3 in mg/capita/day',
    postgresql: {
      columnName: 'niacin',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  B3?: number;

  @property({
    type: 'number',
    description:
      'Percentage difference between the projected availability for B3 and the projected value for the previous model year',
    postgresql: {
      columnName: 'niacin_diff',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  B3Diff?: number;

  @property({
    type: 'number',
    description: 'Projected availability for Phosphorus in mg/capita/day',
    postgresql: {
      columnName: 'phosphorus',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  P?: number;

  @property({
    type: 'number',
    description:
      'Percentage difference between the projected availability for Phosphorus and the projected value for the previous model year',
    postgresql: {
      columnName: 'phosphorus_diff',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  PDiff?: number;

  @property({
    type: 'number',
    description: 'Projected availability for Potassium in mg/capita/day',
    postgresql: {
      columnName: 'potassium',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  K?: number;

  @property({
    type: 'number',
    description:
      'Percentage difference between the projected availability for Potassium and the projected value for the previous model year',
    postgresql: {
      columnName: 'potassium_diff',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  KDiff?: number;

  @property({
    type: 'number',
    description: 'Projected availability for Protein in mg/capita/day',
    postgresql: {
      columnName: 'protein',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  Protein?: number;

  @property({
    type: 'number',
    description:
      'Percentage difference between the projected availability for Protein and the projected value for the previous model year',
    postgresql: {
      columnName: 'protein_diff',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  ProteinDiff?: number;

  @property({
    type: 'number',
    description: 'Projected availability for B2 in mg/capita/day',
    postgresql: {
      columnName: 'riboflavin',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  B2?: number;

  @property({
    type: 'number',
    description:
      'Percentage difference between the projected availability for B2 and the projected value for the previous model year',
    postgresql: {
      columnName: 'riboflavin_diff',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  B2Diff?: number;

  @property({
    type: 'number',
    description: 'Projected availability for B1 in mg/capita/day',
    postgresql: {
      columnName: 'thiamin',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  B1?: number;

  @property({
    type: 'number',
    description:
      'Percentage difference between the projected availability for B1 and the projected value for the previous model year',
    postgresql: {
      columnName: 'thiamin_diff',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  B1Diff?: number;

  @property({
    type: 'number',
    description: 'Projected availability for Vitamin A in mg/capita/day',
    postgresql: {
      columnName: 'vit_a',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  A?: number;

  @property({
    type: 'number',

    description:
      'Percentage difference between the projected availability for Vitamin A and the projected value for the previous model year',
    postgresql: {
      columnName: 'vit_a_diff',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  ADiff?: number;

  @property({
    type: 'number',
    description: 'Projected availability for B6 in mg/capita/day',
    postgresql: {
      columnName: 'vit_b6',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  B6?: number;

  @property({
    type: 'number',
    description:
      'Percentage difference between the projected availability for B6 and the projected value for the previous model year',
    postgresql: {
      columnName: 'vit_b6_diff',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  B6Diff?: number;

  @property({
    type: 'number',
    description: 'Projected availability for Vitamin C in mg/capita/day',
    postgresql: {
      columnName: 'vit_c',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  C?: number;

  @property({
    type: 'number',
    description:
      'Percentage difference between the projected availability for Vitamin C and the projected value for the previous model year',
    postgresql: {
      columnName: 'vit_c_diff',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  CDiff?: number;

  @property({
    type: 'number',
    description: 'Projected availability for Zinc in mg/capita/day',
    postgresql: {
      columnName: 'zinc',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  Zn?: number;

  @property({
    type: 'number',
    description:
      'Percentage difference between the projected availability for Zinc and the projected value for the previous model year',
    postgresql: {
      columnName: 'zinc_diff',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  ZnDiff?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ImpactTotalFoodAvailability>) {
    super(data);
  }
}

export interface ImpactTotalFoodAvailabilityRelations {
  // describe navigational properties here
}

export type ImpactTotalFoodAvailabilityWithRelations = ImpactTotalFoodAvailability &
  ImpactTotalFoodAvailabilityRelations;
