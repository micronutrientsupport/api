import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'bmgf', table: 'food_group_items'}}
})
export class FoodGroupItems extends Entity {
  @property({
    type: 'number',
    scale: 0,
    id: true,
    postgresql: {columnName: 'group_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  groupId?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'group_name', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  groupName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'food_items', dataType: 'json', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fooditems?: [{id: string, foodName: string}];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<FoodGroupItems>) {
    super(data);
  }
}

export interface FoodGroupItemsRelations {
  // describe navigational properties here
}

export type FoodGroupItemsWithRelations = FoodGroupItems & FoodGroupItemsRelations;
