import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: process.env.DB_SCHEMA, table: 'household_intake_afe'},
  },
})
export class HouseholdIntakeAfe extends Entity {
  @property({
    type: 'number',
    scale: 0,
    id: true,
    postgresql: {
      columnName: 'consumption_data_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  consumptionDataId?: number;

  @property({
    type: 'string',
    id: true,
    postgresql: {
      columnName: 'micronutrient_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  micronutrientId?: string;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'dietary_supply',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  dietarySupply?: number;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'is_deficient',
      dataType: 'boolean',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  isDeficient?: boolean;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'deficient_value',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  deficientValue?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HouseholdIntakeAfe>) {
    super(data);
  }
}

export interface HouseholdIntakeAfeRelations {
  // describe navigational properties here
}

export type HouseholdIntakeAfeWithRelations = HouseholdIntakeAfe &
  HouseholdIntakeAfeRelations;
