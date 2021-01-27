import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'bmgf', table: 'impact_total_food_availability'}
  }
})
export class ImpactTotalFoodAvailability extends Entity {
  @property({
    type: 'string',
    id: true,
    postgresql: {columnName: 'country', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  country?: string;

  @property({
    type: 'number',
    scale: 0,
    id: true,
    postgresql: {columnName: 'year', dataType: 'smallint', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  year?: number;

  @property({
    type: 'string',
    id: true,
    postgresql: {columnName: 'scenario', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  scenario?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'calcium', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  Ca?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'calcium_diff', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  CaDiff?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'folate', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  B9?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'folate_diff', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  B9Diff?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'iron', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  Fe?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'iron_diff', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  FeDiff?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'magnesium', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  Mg?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'magnesium_diff', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  MgDiff?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'niacin', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  B3?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'niacin_diff', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  B3Diff?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'phosphorus', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  P?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'phosphorus_diff', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  PDiff?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'potassium', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  K?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'potassium_diff', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  KDiff?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'protein', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  Protein?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'protein_diff', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  ProteinDiff?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'riboflavin', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  B2?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'riboflavin_diff', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  B2Diff?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'thiamin', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  B1?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'thiamin_diff', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  B1Diff?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'vit_a', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  A?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'vit_a_diff', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  ADiff?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'vit_b6', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  B6?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'vit_b6_diff', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  B6Diff?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'vit_c', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  C?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'vit_c_diff', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  CDiff?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'zinc', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  Zn?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'zinc_diff', dataType: 'numeric', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
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

export type ImpactTotalFoodAvailabilityWithRelations = ImpactTotalFoodAvailability & ImpactTotalFoodAvailabilityRelations;
