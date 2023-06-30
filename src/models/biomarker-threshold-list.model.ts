import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'bmgf', table: 'biomarker_threshold_list'},
  },
})
export class BiomarkerThresholdList extends Entity {
  @property({
    type: 'number',
    scale: 0,
    id: true,
    postgresql: {
      columnName: 'threshold_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  thresholdId?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'biomarker_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  biomarkerId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'group_id',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  groupId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'condition_text',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  conditionText?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'condition',
      dataType: 'json',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  condition?: object;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'threshold_type',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  thresholdType?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'source',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  source?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'matrix',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  matrix?: string;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'lower_threshold',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  lowerThreshold?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'upper_threshold',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  upperThreshold?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'comments',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  comments?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BiomarkerThresholdList>) {
    super(data);
  }
}

export interface BiomarkerThresholdListRelations {
  // describe navigational properties here
}

export type BiomarkerThresholdListWithRelations = BiomarkerThresholdList &
  BiomarkerThresholdListRelations;
