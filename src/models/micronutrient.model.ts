import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, hiddenProperties: ['fooditemColumn', 'impactColumn'], postgresql: {schema: process.env.DB_SCHEMA, table: 'micronutrient'}}
})
export class Micronutrient extends Entity {
  @property({
    type: 'string',
    required: true,
    id: 1,
    postgresql: {columnName: 'id', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  id: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'name', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  name?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'unit', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  unit?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  description?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'category', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  category?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fooditem_column', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fooditemColumn?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'in_impact', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  isInImpact?: boolean;

  @property({
    type: 'string',
    postgresql: {columnName: 'impact_column', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  impactColumn?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'is_biomarker', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  isBiomarker?: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'is_diet', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  isDiet?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Micronutrient>) {
    super(data);
  }
}

export interface MicronutrientRelations {
  // describe navigational properties here
}

export type MicronutrientWithRelations = Micronutrient & MicronutrientRelations;
