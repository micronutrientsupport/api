import {JSONObject, inject, intercept} from '@loopback/core';
import {Filter, IsolationLevel, repository} from '@loopback/repository';
import {
  Request,
  Response,
  RestBindings,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {parse} from 'excel-formula-parser';
import transformJS from 'js-to-json-logic';
import {
  AuthenticatedRequest,
  AuthenticationCheckInterceptorInterceptor,
} from '../interceptors';
import {
  InterventionBaselineAssumptions,
  InterventionData,
  InterventionDataAggregate,
  InterventionIndustryInformation,
  InterventionList,
  InterventionMonitoringInformation,
  InterventionRecurringCosts,
  InterventionStartupScaleupCosts,
  InterventionSummaryCosts,
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
  InterventionRepository,
  InterventionStartupScaleupCostsRepository,
  InterventionSummaryCostsRepository,
  InterventionVehicleStandardRepository,
} from '../repositories';
import {StandardJsonResponse} from './standardJsonResponse';
import {StandardOpenApiResponses} from './standardOpenApiResponses';

export type InterventionDataFields = {
  debug: any;
  year0: number;
  year0Edited: boolean;
  year0Default: number;
  year0Formula: string | JSONObject;
  year1: number;
  year1Edited: boolean;
  year1Default: number;
  year1Formula: string | JSONObject;
  year2: number;
  year2Edited: boolean;
  year2Default: number;
  year2Formula: string | JSONObject;
  year3: number;
  year3Edited: boolean;
  year3Default: number;
  year3Formula: string | JSONObject;
  year4: number;
  year4Edited: boolean;
  year4Default: number;
  year4Formula: string | JSONObject;
  year5: number;
  year5Edited: boolean;
  year5Default: number;
  year5Formula: string | JSONObject;
  year6: number;
  year6Edited: boolean;
  year6Default: number;
  year6Formula: string | JSONObject;
  year7: number;
  year7Edited: boolean;
  year7Default: number;
  year7Formula: string | JSONObject;
  year8: number;
  year8Edited: boolean;
  year8Default: number;
  year8Formula: string | JSONObject;
  year9: number;
  year9Edited: boolean;
  year9Default: number;
  year9Formula: string | JSONObject;
  missingData?: {};
  reportedRows?: {};
  missingRows?: {};
  rowName: string;
  rowIndex: number;
  rowUnits: string;
  labelText: string;
  dataSource: string;
  isEditable: boolean;
  dataCitation: string;
  dataSourceDefault: string;
};

export type InterventionDataFieldsSubset = Omit<
  InterventionDataFields,
  | 'year2'
  | 'year2Edited'
  | 'year2Default'
  | 'year2Formula'
  | 'year3'
  | 'year3Edited'
  | 'year3Default'
  | 'year3Formula'
  | 'year4'
  | 'year4Edited'
  | 'year4Default'
  | 'year4Formula'
  | 'year5'
  | 'year5Edited'
  | 'year5Default'
  | 'year5Formula'
  | 'year6'
  | 'year6Edited'
  | 'year6Default'
  | 'year6Formula'
  | 'year7'
  | 'year7Edited'
  | 'year7Default'
  | 'year7Formula'
  | 'year8'
  | 'year8Edited'
  | 'year8Default'
  | 'year8Formula'
  | 'year9'
  | 'year9Edited'
  | 'year9Default'
  | 'year9Formula'
>;

const formulaToJsonLogic = (formula: string, missingData?: {}): JSONObject => {
  if (!formula) return {};

  // strip up to and including opening = sign
  const operands = formula.substring(formula.indexOf('=') + 1);

  //console.log(operands);

  // Convert excel formula into AST
  const tree = parse(operands);

  //console.log(tree);
  //Convert AST to Json logic
  const jsonLogic = transformJS.processNode(tree, missingData);

  return jsonLogic;
};

function replaceExcelFormulaeWothJsonLogic<
  Type extends InterventionDataFields | InterventionDataFieldsSubset,
>(dataObject: Type): Type {
  dataObject.debug = {};
  dataObject.debug.year0FormulaExcel = dataObject.year0Formula;
  dataObject.debug.year1FormulaExcel = dataObject.year1Formula;
  if (Object.prototype.hasOwnProperty.call(dataObject, 'year2Formula')) {
    dataObject.debug.year2FormulaExcel = (
      dataObject as InterventionDataFields
    ).year2Formula;
    dataObject.debug.year3FormulaExcel = (
      dataObject as InterventionDataFields
    ).year3Formula;
    dataObject.debug.year4FormulaExcel = (
      dataObject as InterventionDataFields
    ).year4Formula;
    dataObject.debug.year5FormulaExcel = (
      dataObject as InterventionDataFields
    ).year5Formula;
    dataObject.debug.year6FormulaExcel = (
      dataObject as InterventionDataFields
    ).year6Formula;
    dataObject.debug.year7FormulaExcel = (
      dataObject as InterventionDataFields
    ).year7Formula;
    dataObject.debug.year8FormulaExcel = (
      dataObject as InterventionDataFields
    ).year8Formula;
    dataObject.debug.year9FormulaExcel = (
      dataObject as InterventionDataFields
    ).year9Formula;
  }

  dataObject.year0Formula = formulaToJsonLogic(
    dataObject.year0Formula as string,
    dataObject.missingData,
  );
  dataObject.year1Formula = formulaToJsonLogic(
    dataObject.year1Formula as string,
    dataObject.missingData,
  );
  if (Object.prototype.hasOwnProperty.call(dataObject, 'year2Formula')) {
    (dataObject as InterventionDataFields).year2Formula = formulaToJsonLogic(
      (dataObject as InterventionDataFields).year2Formula as string,
      dataObject.missingData,
    );
  }
  if (Object.prototype.hasOwnProperty.call(dataObject, 'year3Formula')) {
    (dataObject as InterventionDataFields).year3Formula = formulaToJsonLogic(
      (dataObject as InterventionDataFields).year3Formula as string,
      dataObject.missingData,
    );
  }
  if (Object.prototype.hasOwnProperty.call(dataObject, 'year4Formula')) {
    (dataObject as InterventionDataFields).year4Formula = formulaToJsonLogic(
      (dataObject as InterventionDataFields).year4Formula as string,
      dataObject.missingData,
    );
  }
  if (Object.prototype.hasOwnProperty.call(dataObject, 'year5Formula')) {
    (dataObject as InterventionDataFields).year5Formula = formulaToJsonLogic(
      (dataObject as InterventionDataFields).year5Formula as string,
      dataObject.missingData,
    );
  }
  if (Object.prototype.hasOwnProperty.call(dataObject, 'year6Formula')) {
    (dataObject as InterventionDataFields).year6Formula = formulaToJsonLogic(
      (dataObject as InterventionDataFields).year6Formula as string,
      dataObject.missingData,
    );
  }
  if (Object.prototype.hasOwnProperty.call(dataObject, 'year7Formula')) {
    (dataObject as InterventionDataFields).year7Formula = formulaToJsonLogic(
      (dataObject as InterventionDataFields).year7Formula as string,
      dataObject.missingData,
    );
  }
  if (Object.prototype.hasOwnProperty.call(dataObject, 'year8Formula')) {
    (dataObject as InterventionDataFields).year8Formula = formulaToJsonLogic(
      (dataObject as InterventionDataFields).year8Formula as string,
      dataObject.missingData,
    );
  }
  if (Object.prototype.hasOwnProperty.call(dataObject, 'year9Formula')) {
    (dataObject as InterventionDataFields).year9Formula = formulaToJsonLogic(
      (dataObject as InterventionDataFields).year9Formula as string,
      dataObject.missingData,
    );
  }

  dataObject.debug.missingData = dataObject.missingData;
  dataObject.debug.missingRows = dataObject.missingRows;
  dataObject.debug.reportedRows = dataObject.reportedRows;

  delete dataObject.missingData;
  delete dataObject.missingRows;
  delete dataObject.reportedRows;

  return dataObject;
}

export class InterventionController {
  constructor(
    @repository(InterventionRepository)
    public interventionRepository: InterventionRepository,
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
    @repository(InterventionSummaryCostsRepository)
    public interventionSummaryCostsRepository: InterventionSummaryCostsRepository,
    @repository(InterventionDataRepository)
    public interventionDataRepository: InterventionDataRepository,
    @inject(RestBindings.Http.RESPONSE) private response: Response,
    @inject(RestBindings.Http.REQUEST) private request: Request,
  ) {}

  @intercept(AuthenticationCheckInterceptorInterceptor.BINDING_KEY)
  @post('/interventions', {
    responses: new StandardOpenApiResponses(
      'Array of Micronutrient model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionList))
      .toObject(),
  })
  async create(
    @param.header.string('X-Session-Token', {
      description: 'Optional session token returned by `/user/login`',
      required: false,
      example: 'r:123456789abc',
    })
    sessionToken: string,
    @requestBody({
      content: {
        'application/json': {
          schema: {
            title: 'CreateInterventionBody',
            required: ['parentInterventionId', 'newInterventionName'],
            type: 'object',
            properties: {
              parentInterventionId: {
                description:
                  'ID of the parent intervention to copy as returned by `/interventions`',
                type: 'number',
              },
              newInterventionName: {
                description: 'Name for the derived intervention',
                type: 'string',
              },
              newInterventionDescription: {
                description: 'Description for the derived intervention',
                type: 'string',
              },
              newInterventionNation: {
                description: 'ISO short code for the focus nation',
                type: 'string',
              },
              newInterventionFocusGeography: {
                description: 'ID for the intervention focus geography',
                type: 'string',
              },
              newInterventionFocusMicronutrient: {
                description: 'ID for the focus micronutrient',
                type: 'string',
              },
            },
          },
        },
      },
    })
    body: {
      parentInterventionId: number;
      newInterventionName: string;
      newInterventionNation: string;
      newInterventionFocusMicronutrient: string;
      newInterventionFocusGeography?: string;
      newInterventionDescription?: string;
    },
  ): Promise<StandardJsonResponse<Array<InterventionList>>> {
    let newIntervention;
    if ((this.request as AuthenticatedRequest).user) {
      const user = (this.request as AuthenticatedRequest).user;
      newIntervention =
        await this.interventionListRepository.createNewIntervention(
          body.parentInterventionId,
          body.newInterventionName,
          body.newInterventionNation,
          body.newInterventionFocusMicronutrient,
          body.newInterventionFocusGeography
            ? body.newInterventionFocusGeography
            : body.newInterventionNation,
          body.newInterventionDescription
            ? body.newInterventionDescription
            : '',
          user.id,
        );
    } else {
      newIntervention =
        await this.interventionListRepository.createNewIntervention(
          body.parentInterventionId,
          body.newInterventionName,
          body.newInterventionNation,
          body.newInterventionFocusMicronutrient,
          body.newInterventionFocusGeography
            ? body.newInterventionFocusGeography
            : body.newInterventionNation,
          body.newInterventionDescription
            ? body.newInterventionDescription
            : '',
        );
    }
    return new StandardJsonResponse<Array<InterventionList>>(
      `New Intervention created`,
      newIntervention,
      'InterventionList',
    );
  }

  @intercept(AuthenticationCheckInterceptorInterceptor.BINDING_KEY)
  @get('/interventions', {
    description: 'get interventions',
    summary: 'get interventions',
    responses: new StandardOpenApiResponses(
      'Array of Micronutrient model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionList))
      .toObject(),
  })
  async find(
    @param.header.string('X-Session-Token', {
      description: 'Optional session token returned by `/user/login`',
      required: false,
      example: 'r:123456789abc',
    })
    sessionToken: string,
    @param.query.boolean('includeTemplates', {
      description:
        'Should template interventions be included in the respone?  Defaults to true',
    })
    includeTemplates?: boolean,
  ): Promise<StandardJsonResponse<Array<InterventionList>>> {
    const templateFilter: Filter = {
      where: {
        isTemplateIntervention: true,
      },
      // fields: {
      //   userId: false,
      // },
    };

    const returnTemplates =
      typeof includeTemplates === 'undefined' || includeTemplates
        ? true
        : false;

    const templateInterventions = returnTemplates
      ? await this.interventionListRepository.find(templateFilter)
      : [];

    if ((this.request as AuthenticatedRequest).user) {
      const user = (this.request as AuthenticatedRequest).user;
      const userFilter: Filter = {
        where: {
          userId: user.id,
        },
        // fields: {
        //   userId: false,
        // },
      };

      const userInterventions = await this.interventionListRepository.find(
        userFilter,
      );

      return new StandardJsonResponse<Array<InterventionList>>(
        `${templateInterventions.length} Template Interventions and ${userInterventions.length} user interventions returned.`,
        userInterventions.concat(templateInterventions),
        'InterventionList',
      );
    } else {
      return new StandardJsonResponse<Array<InterventionList>>(
        `${templateInterventions.length} Template Interventions returned.`,
        templateInterventions,
        'InterventionList',
      );
    }
  }

  @intercept(AuthenticationCheckInterceptorInterceptor.BINDING_KEY)
  @patch('/interventions/{id}', {
    description: 'get intervention by id',
    summary: 'get intervention by id',
    responses: new StandardOpenApiResponses(
      'Array of Micronutrient model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionList))
      .toObject(),
  })
  async claimIntervention(
    @param.header.string('X-Session-Token', {
      description: 'Optional session token returned by `/user/login`',
      required: true,
      example: 'r:123456789abc',
    })
    sessionToken: string,
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<any>>> {
    const filter: Filter = {
      where: {
        id: id,
        isTemplateIntervention: false,
        userId: 'Anonymous',
      },
    };
    const intervention = await this.interventionRepository.find(filter);
    if (intervention.length < 1) {
      this.response.status(404);
      return new StandardJsonResponse<Array<any>>(
        `Intervention id ${id} not found or unavailable to claim`,
        [],
        '',
        '404',
      );
    }
    if ((this.request as AuthenticatedRequest).user) {
      const user = (this.request as AuthenticatedRequest).user;
      intervention[0].userId = user.id;

      await this.interventionRepository.update(intervention[0]);
    }

    const updated = await this.interventionListRepository.findById(id);

    console.log(intervention[0]);
    return new StandardJsonResponse<Array<InterventionList>>(
      `Intervention ownership updated.`,
      [updated],
      'InterventionList',
    );
  }

  @intercept(AuthenticationCheckInterceptorInterceptor.BINDING_KEY)
  @get('/interventions/{id}', {
    description: 'get intervention by id',
    summary: 'get intervention by id',
    responses: new StandardOpenApiResponses(
      'Array of Micronutrient model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionList))
      .toObject(),
  })
  async findById(
    @param.header.string('X-Session-Token', {
      description: 'Optional session token returned by `/user/login`',
      required: false,
      example: 'r:123456789abc',
    })
    sessionToken: string,
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<InterventionList>>> {
    let userId = 'Anonymous';

    let authenticatedInterventions: InterventionList[] = [];
    if ((this.request as AuthenticatedRequest).user) {
      const user = (this.request as AuthenticatedRequest).user;
      userId = user.id;
      const authenticatedFilter: Filter = {
        where: {
          id: id,
          isTemplateIntervention: false,
          userId: userId,
        },
      };
      authenticatedInterventions = await this.interventionListRepository.find(
        authenticatedFilter,
      );
    }

    const anonymousFilter: Filter = {
      where: {
        id: id,
        isTemplateIntervention: false,
        userId: 'Anonymous',
      },
    };
    const anonymousInterventions = await this.interventionListRepository.find(
      anonymousFilter,
    );
    return new StandardJsonResponse<Array<InterventionList>>(
      `Intervention returned.`,
      anonymousInterventions.concat(authenticatedInterventions),
      'InterventionList',
    );
  }

  @get('/interventions/{id}/data', {
    description: 'get all data for intervention',
    summary: 'get all data for intervention',
    responses: new StandardOpenApiResponses(
      'Array of Micronutrient model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionDataAggregate))
      .toObject(),
  })
  async findAllCostsById(
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<InterventionDataAggregate>>> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    const baselineAssumptions =
      await this.interventionBaselineAssumptionsRepository.find(filter);
    const foodVehicleStandard =
      await this.interventionVehicleStandardRepository.find(filter);
    const industryInformation =
      await this.interventionIndustryInformationRepository.find(filter);
    const monitoringInformation =
      await this.interventionMonitoringInformationRepository.find(filter);
    const startupScaleupCosts =
      await this.interventionStartupScaleupCostsRepository.find(filter);
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

    return new StandardJsonResponse<Array<InterventionDataAggregate>>(
      `Intervention data returned.`,
      [interventionData],
      'InterventionDataAggregate',
    );
  }

  @get('/interventions/{id}/baseline-assumptions', {
    description: 'get baseline',
    summary: 'get baseline',
    operationId: 'baseline-assumptions',
    responses: new StandardOpenApiResponses(
      'Array of InterventionBaselineAssumptions instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionBaselineAssumptions))
      .toObject(),
  })
  async findBaselineAssumptionsById(
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<InterventionBaselineAssumptions>>> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    const baselineAssumptions =
      await this.interventionBaselineAssumptionsRepository.find(filter);
    return new StandardJsonResponse<Array<InterventionBaselineAssumptions>>(
      `Intervention data returned.`,
      baselineAssumptions,
      'InterventionBaselineAssumptions',
    );
  }

  @get('/interventions/{id}/food-vehicle-standards', {
    description: 'get food-vehicle',
    summary: 'get food-vehicle',
    operationId: 'food-vehicle-standards',
    responses: new StandardOpenApiResponses(
      'Array of InterventionVehicleStandard instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionVehicleStandard))
      .toObject(),
  })
  async findFoodVehicleStandardById(
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<InterventionVehicleStandard>>> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    const foodVehicleStandard =
      await this.interventionVehicleStandardRepository.find(filter);
    return new StandardJsonResponse<Array<InterventionVehicleStandard>>(
      `Intervention data returned.`,
      foodVehicleStandard,
      'InterventionVehicleStandard',
    );
  }

  @get('/interventions/{id}/industry-information', {
    description: 'get industry-info',
    summary: 'get industry-info',
    operationId: 'industry-information',
    responses: new StandardOpenApiResponses(
      'Array of InterventionIndustryInformation instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionIndustryInformation))
      .toObject(),
  })
  async findIndustryInfoById(
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<InterventionIndustryInformation>>> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    const industryInformation =
      await this.interventionIndustryInformationRepository.find(filter);

    // Replace Excel Formulae with JsonLogic for interpretation on the frontend
    industryInformation[0].industryInformation =
      industryInformation[0].industryInformation.map(
        (value: InterventionDataFields) => {
          return replaceExcelFormulaeWothJsonLogic(value);
        },
      );

    return new StandardJsonResponse<Array<InterventionIndustryInformation>>(
      `Intervention data returned.`,
      industryInformation,
      'InterventionIndustryInformation',
    );
  }

  @get('/interventions/{id}/monitoring-information', {
    description: 'get monitoring',
    summary: 'get monitoring',
    operationId: 'monitoring-information',
    responses: new StandardOpenApiResponses(
      'Array of InterventionMonitoringInformation instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionMonitoringInformation))
      .toObject(),
  })
  async findMonitoringInfoById(
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<InterventionMonitoringInformation>>> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    const monitoringInformation =
      await this.interventionMonitoringInformationRepository.find(filter);

    // Replace Excel Formulae with JsonLogic for interpretation on the frontend
    monitoringInformation[0].monitoringInformation =
      monitoringInformation[0].monitoringInformation.map(
        (value: InterventionDataFields) => {
          return replaceExcelFormulaeWothJsonLogic(value);
        },
      );

    return new StandardJsonResponse<Array<InterventionMonitoringInformation>>(
      `Intervention data returned.`,
      monitoringInformation,
      'InterventionMonitoringInformation',
    );
  }

  @get('/interventions/{id}/startup-scaleup-costs', {
    description: 'get startup',
    summary: 'get startup',
    operationId: 'startup-scaleup-costs',
    responses: new StandardOpenApiResponses(
      'Array of InterventionStartupScaleupCosts instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionStartupScaleupCosts))
      .toObject(),
  })
  async findStartupScaleupCostsById(
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<InterventionStartupScaleupCosts>>> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    const startupScaleup =
      await this.interventionStartupScaleupCostsRepository.find(filter);

    // Replace Excel Formulae with JsonLogic for interpretation on the frontend
    startupScaleup[0].startupScaleupCosts?.forEach(section => {
      section.costs.forEach(costs => {
        costs.costBreakdown.map(value => {
          return replaceExcelFormulaeWothJsonLogic(value);
        });
      });
    });

    return new StandardJsonResponse<Array<InterventionStartupScaleupCosts>>(
      `Intervention data returned.`,
      startupScaleup,
      'InterventionStartupScaleupCosts',
    );
  }

  @get('/interventions/{id}/recurring-costs', {
    description: 'get recurring',
    summary: 'get recurring',
    operationId: 'recurring-costs',
    responses: new StandardOpenApiResponses(
      'Array of InterventionRecurringCosts instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionRecurringCosts))
      .toObject(),
  })
  async findRecurringCostsById(
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<InterventionRecurringCosts>>> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    const recurring = await this.interventionRecurringCostsRepository.find(
      filter,
    );

    // Replace Excel Formulae with JsonLogic for interpretation on the frontend
    recurring[0].recurringCosts?.forEach(section => {
      section.costs.forEach(costs => {
        costs.costBreakdown.map(value => {
          return replaceExcelFormulaeWothJsonLogic(value);
        });
      });
    });

    return new StandardJsonResponse<Array<InterventionRecurringCosts>>(
      `Intervention data returned.`,
      recurring,
      'InterventionRecurringCosts',
    );
  }

  @get('/interventions/{id}/cost-summary', {
    description: 'get summary',
    summary: 'get summary',
    operationId: 'summary-costs',
    responses: new StandardOpenApiResponses(
      'Array of InterventionSummaryCosts instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionSummaryCosts))
      .toObject(),
  })
  async findCostsSummaryById(
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<InterventionSummaryCosts>>> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    const recurring = await this.interventionSummaryCostsRepository.find(
      filter,
    );
    return new StandardJsonResponse<Array<InterventionSummaryCosts>>(
      `Intervention data returned.`,
      recurring,
      'InterventionSummaryCosts',
    );
  }

  @patch('/interventions/{id}/data', {
    description: 'patch data',
    summary: 'patch data',
    operationId: 'datap',
    responses: new StandardOpenApiResponses(
      'Array of Micronutrient model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionList))
      .toObject(),
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
  ): Promise<StandardJsonResponse<Array<InterventionList>>> {
    console.log('Patch');
    console.log(interventionUpdateDeltaList);

    const tx =
      await this.interventionDataRepository.dataSource.beginTransaction(
        IsolationLevel.READ_COMMITTED,
      );
    interventionUpdateDeltaList.map(async delta => {
      const interventionUpdateDelta = new InterventionData(delta);
      await this.interventionDataRepository.updateAll(
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

    // Fetch the intervention
    const filter: Filter = {
      where: {
        id: id,
      },
    };
    const intervention = await this.interventionListRepository.find(filter);

    const data = new StandardJsonResponse<Array<InterventionList>>(
      `Intervention data updated`,
      intervention,
      'InterventionList',
    );

    console.log(data);

    //this.response.set('Access-Control-Allow-Methods', '*');
    //this.response.status(200).send(data);
    // Return the HTTP response object so that LoopBack framework skips the
    // generation of HTTP response
    return data;
  }
}
