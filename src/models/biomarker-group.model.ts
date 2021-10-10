import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: process.env.DB_SCHEMA, table: 'biomarker_group'},
  },
})
export class BiomarkerGroup extends Entity {
  @property({
    type: 'string',
    description: 'ID of the biomarker age-gender group',
    required: true,
    id: 1,
    postgresql: {
      columnName: 'group_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  groupId: string;

  @property({
    type: 'string',
    description:
      'Classification of the biomarker age-gender group. Adult/Children',
    postgresql: {
      columnName: 'supra_group',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  supraGroup?: string;

  @property({
    type: 'string',
    description: 'Human readable name of the biomarker age-gender group',
    postgresql: {
      columnName: 'group_name',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  groupName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BiomarkerGroup>) {
    super(data);
  }
}

export interface BiomarkerGroupRelations {
  // describe navigational properties here
}

export type BiomarkerGroupWithRelations = BiomarkerGroup &
  BiomarkerGroupRelations;
