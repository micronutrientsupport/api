import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, hiddenProperties: ['fooditemColumn'], postgresql: {schema: 'bmgf', table: 'micronutrients'}}
})
export class Micronutrients extends Entity {
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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Micronutrients>) {
    super(data);
  }
}

export interface MicronutrientsRelations {
  // describe navigational properties here
}

export type MicronutrientsWithRelations = Micronutrients & MicronutrientsRelations;
