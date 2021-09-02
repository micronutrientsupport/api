import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: process.env.DB_SCHEMA, table: 'top20_mn_per_hhsurvey'},
  },
})
export class Top20MnPerHhsurvey extends Entity {
  @property({
    type: 'number',
    description:
      'The ID of the consumption data used for matching and calculations',
    id: true,
    scale: 0,
    postgresql: {
      columnName: 'survey_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  consumptionDataId?: number;

  @property({
    type: 'number',
    description:
      'The ID of the composition data used for matching and calculations',
    id: true,
    scale: 0,
    postgresql: {
      columnName: 'fct_source_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  compositionDataId?: number;

  @property({
    type: 'string',
    description: 'ID of the micronutrient',
    postgresql: {
      columnName: 'mn_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  micronutrientId?: string;

  @property({
    type: 'string',
    description: 'Food Genus of the contributing food item',
    postgresql: {
      columnName: 'food_genus_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  foodGenusId?: string;

  @property({
    type: 'number',
    description:
      'Quantity of micronutrient provided by the food item per capita per day',
    postgresql: {
      columnName: 'mn_consumed_per_day',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  dailyMnContribution?: number;

  @property({
    type: 'number',
    description:
      'Ranking of the scale of micronutrient contribution from this food item (low number = greater contribution)',
    scale: 0,
    postgresql: {
      columnName: 'ranking',
      dataType: 'bigint',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  ranking?: number;

  @property({
    type: 'string',
    description: 'Human readbale name of the contributing food item',
    postgresql: {
      columnName: 'food_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  foodGenusName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Top20MnPerHhsurvey>) {
    super(data);
  }
}

export interface Top20MnPerHhsurveyRelations {
  // describe navigational properties here
}

export type Top20MnPerHhsurveyWithRelations = Top20MnPerHhsurvey &
  Top20MnPerHhsurveyRelations;
