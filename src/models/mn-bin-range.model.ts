import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'bmgf', table: 'mn_bin_range'},
  },
})
export class MnBinRange extends Entity {
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
      columnName: 'scale',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  scale?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {
      columnName: 'bin0',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  bin0?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'bin1',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  bin1?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'bin2',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  bin2?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'bin3',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  bin3?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'bin4',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  bin4?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'bin5',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  bin5?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'binmax',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  binmax?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'max',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  max?: number;

  @property({
    type: 'number',
    postgresql: {
      columnName: 'min',
      dataType: 'numeric',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  min?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MnBinRange>) {
    super(data);
  }
}

export interface MnBinRangeRelations {
  // describe navigational properties here
}

export type MnBinRangeWithRelations = MnBinRange & MnBinRangeRelations;
