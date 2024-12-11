import {Entity, model, property} from '@loopback/repository';
import {InterventionDataFields} from '../controllers/intervention.controller';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: process.env.DB_SCHEMA,
      table: 'intervention_crop_production_information',
    },
  },
})
export class InterventionCropProductionInformation extends Entity {
  @property({
    type: 'number',
    id: true,
    scale: 0,
    postgresql: {
      columnName: 'intervention_id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'YES',
    },
  })
  interventionId?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'crop_production_information',
      dataType: 'jsonb',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  cropProductionInformation: InterventionDataFields[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionCropProductionInformation>) {
    super(data);
  }
}

export interface InterventionCropProductionInformationRelations {
  // describe navigational properties here
}

export type InterventionCropProductionInformationWithRelations =
  InterventionCropProductionInformation &
    InterventionCropProductionInformationRelations;
