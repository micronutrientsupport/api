import {
  Filter,
  FilterExcludingWhere,
  IsolationLevel,
  repository,
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  patch,
  requestBody,
} from '@loopback/rest';
import {
  InterventionBaselineAssumptions,
  InterventionData,
  InterventionDataAggregate,
  InterventionIndustryInformation,
  InterventionList,
  InterventionMonitoringInformation,
  InterventionRecurringCosts,
  InterventionStartupScaleupCosts,
  InterventionUpdateDelta,
  InterventionVehicleStandard,
} from '../models';
import {
  InterventionBaselineAssumptionsRepository,
  InterventionDataRepository,
  InterventionIndustryInformationRepository,
  InterventionListRepository,
  InterventionMonitoringInformationRepository,
  InterventionRecurringCostsRepository,
  InterventionStartupScaleupCostsRepository,
  InterventionVehicleStandardRepository,
} from '../repositories';

export class InterventionController {
  constructor(
    @repository(InterventionListRepository)
    public interventionListRepository: InterventionListRepository,
    @repository(InterventionBaselineAssumptionsRepository)
    public interventionBaselineAssumptionsRepository: InterventionBaselineAssumptionsRepository,
    @repository(InterventionVehicleStandardRepository)
    public interventionVehicleStandardRepository: InterventionVehicleStandardRepository,
    @repository(InterventionIndustryInformationRepository)
    public interventionIndustryInformationRepository: InterventionIndustryInformationRepository,
    @repository(InterventionMonitoringInformationRepository)
    public interventionMonitoringInformationRepository: InterventionMonitoringInformationRepository,
    @repository(InterventionStartupScaleupCostsRepository)
    public interventionStartupScaleupCostsRepository: InterventionStartupScaleupCostsRepository,
    @repository(InterventionRecurringCostsRepository)
    public interventionRecurringCostsRepository: InterventionRecurringCostsRepository,
    @repository(InterventionDataRepository)
    public interventionDataRepository: InterventionDataRepository,
  ) {}

  @get('/interventions', {
    description: 'get interventions',
    summary: 'get interventions',
    responses: {
      '200': {
        description: 'Array of InterventionList model instances',
        summary: '',
        content: {
          'application/json': {
            schema: {
              title: 'InterventionList',
              type: 'array',
              items: getModelSchemaRef(InterventionList, {
                includeRelations: true,
              }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(InterventionList) filter?: Filter<InterventionList>,
  ): Promise<InterventionList[]> {
    return this.interventionListRepository.find(filter);
  }

  @get('/interventions/{id}', {
    description: 'get intervention by id',
    summary: 'get intervention by id',
    responses: {
      '200': {
        description: 'InterventionList model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(InterventionList, {
              includeRelations: true,
            }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(InterventionList, {exclude: 'where'})
    filter?: FilterExcludingWhere<InterventionList>,
  ): Promise<InterventionList> {
    return this.interventionListRepository.findById(id, filter);
  }

  @get('/interventions/{id}/data', {
    description: 'get all data for intervention',
    summary: 'get all data for intervention',
    responses: {
      '200': {
        description: 'InterventionList model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(InterventionDataAggregate, {
              includeRelations: true,
            }),
          },
        },
      },
    },
  })
  async findAllCostsById(
    @param.path.number('id') id: number,
  ): Promise<InterventionDataAggregate> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    const baselineAssumptions = await this.interventionBaselineAssumptionsRepository.find(
      filter,
    );
    const foodVehicleStandard = await this.interventionVehicleStandardRepository.find(
      filter,
    );
    const industryInformation = await this.interventionIndustryInformationRepository.find(
      filter,
    );
    const monitoringInformation = await this.interventionMonitoringInformationRepository.find(
      filter,
    );
    const startupScaleupCosts = await this.interventionStartupScaleupCostsRepository.find(
      filter,
    );
    const recurringCosts = await this.interventionRecurringCostsRepository.find(
      filter,
    );

    const interventionData = new InterventionDataAggregate({
      ...baselineAssumptions[0],
      ...foodVehicleStandard[0],
      ...industryInformation[0],
      ...monitoringInformation[0],
      ...startupScaleupCosts[0],
      ...recurringCosts[0],
    });

    return interventionData;
  }

  @get('/interventions/{id}/baseline-assumptions', {
    description: 'get baseline',
    summary: 'get baseline',
    operationId: 'baseline-assumptions',
    responses: {
      '200': {
        description: 'InterventionList model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(InterventionBaselineAssumptions, {
              includeRelations: true,
            }),
          },
        },
      },
    },
  })
  async findBaselineAssumptionsById(
    @param.path.number('id') id: number,
  ): Promise<InterventionBaselineAssumptions[]> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    return this.interventionBaselineAssumptionsRepository.find(filter);
  }

  @get('/interventions/{id}/food-vehicle-standards', {
    description: 'get food-vehicle',
    summary: 'get food-vehicle',
    operationId: 'food-vehicle-standards',
    responses: {
      '200': {
        description: 'InterventionVehicleStandard model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(InterventionVehicleStandard, {
              includeRelations: true,
            }),
          },
        },
      },
    },
  })
  async findFoodVehicleStandardById(
    @param.path.number('id') id: number,
  ): Promise<InterventionVehicleStandard[]> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    return this.interventionVehicleStandardRepository.find(filter);
  }

  @get('/interventions/{id}/industry-information', {
    description: 'get industry-info',
    summary: 'get industry-info',
    operationId: 'industry-information',
    responses: {
      '200': {
        description: 'InterventionIndustryInformation model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(InterventionIndustryInformation, {
              includeRelations: true,
            }),
          },
        },
      },
    },
  })
  async findIndustryInfoById(
    @param.path.number('id') id: number,
  ): Promise<InterventionIndustryInformation[]> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    return this.interventionIndustryInformationRepository.find(filter);
  }

  @get('/interventions/{id}/monitoring-information', {
    description: 'get monitoring',
    summary: 'get monitoring',
    operationId: 'monitoring-information',
    responses: {
      '200': {
        description: 'InterventionMonitoringInformation model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(InterventionMonitoringInformation, {
              includeRelations: true,
            }),
          },
        },
      },
    },
  })
  async findMonitoringInfoById(
    @param.path.number('id') id: number,
  ): Promise<InterventionMonitoringInformation[]> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    return this.interventionMonitoringInformationRepository.find(filter);
  }

  @get('/interventions/{id}/startup-scaleup-costs', {
    description: 'get startup',
    summary: 'get startup',
    operationId: 'startup-scaleup-costs',
    responses: {
      '200': {
        description: 'InterventionStartupScaleupCosts model instance',
        summary: '',
        content: {
          'application/json': {
            schema: getModelSchemaRef(InterventionStartupScaleupCosts, {
              includeRelations: true,
            }),
          },
        },
      },
    },
  })
  async findStartupScaleupCostsById(
    @param.path.number('id') id: number,
  ): Promise<InterventionStartupScaleupCosts[]> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    return this.interventionStartupScaleupCostsRepository.find(filter);
  }

  @get('/interventions/{id}/recurring-costs', {
    description: 'get recurring',
    summary: 'get recurring',
    operationId: 'recurring-costs',
    responses: {
      '200': {
        description: 'InterventionRecurringCosts model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(InterventionRecurringCosts, {
              includeRelations: true,
            }),
          },
        },
      },
    },
  })
  async findRecurringCostsById(
    @param.path.number('id') id: number,
  ): Promise<InterventionRecurringCosts[]> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    return this.interventionRecurringCostsRepository.find(filter);
  }

  @patch('/interventions/{id}/data', {
    description: 'patch data',
    summary: 'patch data',
    operationId: 'datap',
    responses: {
      '204': {
        description: 'InterventionList PATCH success',
      },
    },
  })
  async updateDataRowMultiple(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: {
            title: 'InterventionUpdateDeltaArray',
            type: 'array',
            items: {
              minItems: 1,
              type: 'object',
              required: ['rowIndex'],
              properties: {
                rowIndex: {
                  type: 'number',
                },
                year0: {
                  type: 'number',
                },
                year1: {
                  type: 'number',
                },
                year2: {
                  type: 'number',
                },
                year3: {
                  type: 'number',
                },
                year4: {
                  type: 'number',
                },
                year5: {
                  type: 'number',
                },
                year6: {
                  type: 'number',
                },
                year7: {
                  type: 'number',
                },
                year8: {
                  type: 'number',
                },
                year9: {
                  type: 'number',
                },
              },
            },
          },
        },
      },
    })
    interventionUpdateDeltaList: InterventionUpdateDelta[],
  ): Promise<void> {
    const tx = await this.interventionDataRepository.dataSource.beginTransaction(
      IsolationLevel.READ_COMMITTED,
    );
    interventionUpdateDeltaList.map(delta => {
      const interventionUpdateDelta = new InterventionData(delta);
      this.interventionDataRepository.updateAll(
        interventionUpdateDelta,
        {
          interventionId: id,
          rowIndex: interventionUpdateDelta.rowIndex,
        },
        {
          transaction: tx,
        },
      );
    });
    await tx.commit();
  }
}
