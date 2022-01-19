import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {
      schema: 'bmgf',
      table: 'intervention_industry_information',
    },
  },
})
export class InterventionIndustryInformation extends Entity {
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
      columnName: 'industry_information',
      dataType: 'jsonb',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  industryInformation?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InterventionIndustryInformation>) {
    super(data);
  }
}

export interface InterventionIndustryInformationRelations {
  // describe navigational properties here
}

export type InterventionIndustryInformationWithRelations = InterventionIndustryInformation &
  InterventionIndustryInformationRelations;
