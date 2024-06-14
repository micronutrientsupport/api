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
import * as jsonLogicParser from 'json-logic-js';
import {
  AuthenticatedRequest,
  AuthenticationCheckInterceptorInterceptor,
} from '../interceptors';
import {
  FortificationLevel,
  InterventionBaselineAssumptions,
  InterventionData,
  InterventionDataAggregate,
  InterventionIndustryInformation,
  InterventionList,
  InterventionMonitoringInformation,
  InterventionPremixCalculator,
  InterventionProjectedHouseholds,
  InterventionRecurringCosts,
  InterventionStandardExpectedLosses,
  InterventionStartupScaleupCosts,
  InterventionSummaryCosts,
  InterventionThresholds,
  InterventionUpdateDelta,
  InterventionVehicleStandard,
} from '../models';
import {
  FortifiableFoodItemsRepository,
  FortificationLevelRepository,
  InterventionBaselineAssumptionsRepository,
  InterventionCellFormulaDepsRepository,
  InterventionDataRepository,
  InterventionExpectedLossesRepository,
  InterventionFortificationLevelSummaryRepository,
  InterventionIndustryInformationRepository,
  InterventionListRepository,
  InterventionMonitoringInformationRepository,
  InterventionPremixCalculatorRepository,
  InterventionPremixCostRepository,
  InterventionProjectedHouseholdsRepository,
  InterventionRecurringCostsRepository,
  InterventionRepository,
  InterventionStandardExpectedLossesRepository,
  InterventionStartupScaleupCostsRepository,
  InterventionSummaryCostsRepository,
  InterventionThresholdsRepository,
  InterventionVehicleStandardRepository,
} from '../repositories';
import {OpencpuService} from '../services';
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

type LsffSummaryResponse = {
  admin0Name: string;
  admin1Name: string;
};

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
    @repository(InterventionCellFormulaDepsRepository)
    public interventionCellFormulaDepsRepository: InterventionCellFormulaDepsRepository,
    @repository(InterventionPremixCostRepository)
    public interventionPremixCostRepository: InterventionPremixCostRepository,
    @repository(InterventionPremixCalculatorRepository)
    public interventionPremixCalculatorRepository: InterventionPremixCalculatorRepository,
    @repository(InterventionProjectedHouseholdsRepository)
    public interventionProjectedHouseholdsRepository: InterventionProjectedHouseholdsRepository,
    @repository(InterventionThresholdsRepository)
    public interventionThresholdsRepository: InterventionThresholdsRepository,
    @repository(FortificationLevelRepository)
    public fortificationLevelRepository: FortificationLevelRepository,
    @repository(InterventionExpectedLossesRepository)
    public interventionExpectedLossesRepository: InterventionExpectedLossesRepository,
    @repository(InterventionStandardExpectedLossesRepository)
    public interventionStandardExpectedLossesRepository: InterventionStandardExpectedLossesRepository,
    @repository(InterventionFortificationLevelSummaryRepository)
    public interventionFortificationLevelSummaryRepository: InterventionFortificationLevelSummaryRepository,
    @repository(FortifiableFoodItemsRepository)
    public fortifiableFoodItemsRepository: FortifiableFoodItemsRepository,
    @inject('services.OpencpuService')
    protected opencpuService: OpencpuService,
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

    //console.log(intervention[0]);
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

  @get('/interventions/{id}/premix-levels', {
    description: 'get premix levels',
    summary: 'get premix levels',
    operationId: 'premix-levels',
    responses: new StandardOpenApiResponses(
      'Array of InterventionPremixCalculator instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionPremixCalculator))
      .toObject(),
  })
  async findFortificationLevelsById(
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<InterventionPremixCalculator>>> {
    const filter: Filter = {
      where: {
        and: [
          {interventionId: id},
          {
            or: [
              {fortificationLevel: {gt: 0}},
              {fortificantCompound: 'Excipient'},
            ],
          },
        ],
      },
    };
    const premixLevels = await this.interventionPremixCalculatorRepository.find(
      filter,
    );

    return new StandardJsonResponse<Array<InterventionPremixCalculator>>(
      `Fortification level data returned.`,
      premixLevels,
      'InterventionPremixCalculator',
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

    // Replace Excel Formulae with JsonLogic for interpretation on the frontend
    if (baselineAssumptions[0].baselineAssumptions) {
      baselineAssumptions[0].baselineAssumptions.actuallyFortified =
        replaceExcelFormulaeWothJsonLogic(
          baselineAssumptions[0].baselineAssumptions
            ?.actuallyFortified as InterventionDataFields,
        );
      baselineAssumptions[0].baselineAssumptions.potentiallyFortified =
        replaceExcelFormulaeWothJsonLogic(
          baselineAssumptions[0].baselineAssumptions
            ?.potentiallyFortified as InterventionDataFields,
        );
      baselineAssumptions[0].baselineAssumptions.averageFortificationLevel =
        replaceExcelFormulaeWothJsonLogic(
          baselineAssumptions[0].baselineAssumptions
            ?.averageFortificationLevel as InterventionDataFields,
        );
    }

    return new StandardJsonResponse<Array<InterventionBaselineAssumptions>>(
      `Intervention data returned.`,
      baselineAssumptions,
      'InterventionBaselineAssumptions',
    );
  }

  @get('/interventions/{id}/expected-losses', {
    description: 'get expected-losses',
    summary: 'get expected-losses',
    operationId: 'expected-losses',
    responses: new StandardOpenApiResponses(
      'Array of InterventionStandardExpectedLosses instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionStandardExpectedLosses))
      .toObject(),
  })
  async getExpectedLosses(
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<InterventionStandardExpectedLosses>>> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };
    const expectedLosses =
      await this.interventionStandardExpectedLossesRepository.find(filter);
    return new StandardJsonResponse<Array<InterventionStandardExpectedLosses>>(
      `Intervention data returned.`,
      expectedLosses,
      'InterventionStandardExpectedLosses',
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
        //console.log('Replaing Year0Total Formula', costs.year0TotalFormula);
        costs.year0TotalFormula = formulaToJsonLogic(
          costs.year0TotalFormula as string,
          {},
        );
        costs.year1TotalFormula = formulaToJsonLogic(
          costs.year1TotalFormula as string,
          {},
        );

        return costs;
      });
    });

    return new StandardJsonResponse<Array<InterventionStartupScaleupCosts>>(
      `Intervention data returned.`,
      startupScaleup,
      'InterventionStartupScaleupCosts',
    );
  }

  @get('/interventions/{id}/projected-households', {
    description: 'get projected household numbers for intervention nation',
    summary: 'get projected households',
    operationId: 'projected-households',
    responses: new StandardOpenApiResponses('Array of Intebr instances')
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionProjectedHouseholds))
      .toObject(),
  })
  async getProjectedHouseholds(
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<InterventionProjectedHouseholds>>> {
    const intervention = await this.interventionRepository.findById(id);
    const countryId = intervention.countryId;

    const filter: Filter = {
      where: {
        countryId: countryId,
      },
    };

    const projectedHouseholds =
      await this.interventionProjectedHouseholdsRepository.find(filter);

    return new StandardJsonResponse<Array<InterventionProjectedHouseholds>>(
      `Intervention data returned.`,
      projectedHouseholds,
      'InterventionProjectedHouseholds',
    );
  }

  @get('/interventions/{id}/intake-thresholds', {
    description: 'get intervention specific values for adequacy thresholds',
    summary: 'get adequacy thresholds',
    operationId: 'intake-thresholds',
    responses: new StandardOpenApiResponses('Array of Intebr instances')
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(InterventionThresholds))
      .toObject(),
  })
  async getIntakeThresholds(
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<InterventionThresholds>>> {
    const filter: Filter = {
      where: {
        interventionId: id,
      },
    };

    const intakeThresholds = await this.interventionThresholdsRepository.find(
      filter,
    );

    return new StandardJsonResponse<Array<InterventionThresholds>>(
      `Intervention data returned.`,
      intakeThresholds,
      'InterventionThresholds',
    );
  }

  async getEffectivenessSummaries(
    interventionId: number,
    aggregation?: string,
    metric?: string,
  ): Promise<object[]> {
    const filter: Filter = {
      where: {
        interventionId: interventionId,
      },
    };

    let aggregationFields = ['admin0Name', 'admin1Name'];
    if (aggregation && aggregation === 'admin0') {
      aggregationFields = ['admin0Name'];
    }

    let metricField = 'afe';
    if (metric && metric === 'cnd') {
      metricField = 'cnd';
    }

    const intakeThresholds = await this.interventionThresholdsRepository.find(
      filter,
    );

    const fortificationLevelSummary =
      await this.interventionFortificationLevelSummaryRepository.find(filter);

    const fortifiableFoodItems =
      await this.fortifiableFoodItemsRepository.find();

    const interventionDetails = await this.interventionListRepository.find({
      where: {
        id: interventionId,
      },
    });

    const focusMicronutrient = interventionDetails[0].focusMicronutrient;
    // console.log(fortificationLevelSummary);

    const foo =
      metricField === 'afe'
        ? await this.opencpuService.calculatePreAndPostLSFFSummariesAfe(
            1,
            [focusMicronutrient],
            intakeThresholds,
            fortifiableFoodItems,
            fortificationLevelSummary,
            aggregationFields,
          )
        : await this.opencpuService.calculatePreAndPostLSFFSummariesCnd(
            1,
            [focusMicronutrient],
            intakeThresholds,
            fortifiableFoodItems,
            fortificationLevelSummary,
            aggregationFields,
          );

    const body: LsffSummaryResponse[] = (foo as any).body;

    return body
      .filter(val => {
        for (const field of aggregationFields) {
          if (
            !Object.prototype.hasOwnProperty.call(val, field) ||
            (Object.prototype.hasOwnProperty.call(val, field) &&
              (val as never)[field] === '')
          ) {
            return false;
          }
        }
        return true;
      })
      .map(val => {
        const newObj: {[key: string]: unknown} = {};
        for (const key in val) {
          if (Object.prototype.hasOwnProperty.call(val, key)) {
            if (
              focusMicronutrient &&
              key.startsWith(`${focusMicronutrient}_`)
            ) {
              newObj[key.slice(focusMicronutrient?.length + 1)] = (
                val as never
              )[key];
            } else {
              newObj[key] = (val as never)[key];
            }
          }
        }
        return newObj;
      });
  }

  @get('/interventions/{id}/cost-effectiveness-summary')
  async getLsffCESummary(
    @param.path.number('id') id: number,
  ): Promise<StandardJsonResponse<Array<{}>>> {
    const lsffSummaries = await this.getEffectivenessSummaries(
      id,
      'admin0',
      'afe',
    );

    const intervention = await this.interventionRepository.findById(id);
    const countryId = intervention.countryId;

    const countryFilter: Filter = {
      where: {
        countryId: countryId,
      },
    };

    const projectedHouseholds =
      await this.interventionProjectedHouseholdsRepository.find(countryFilter);

    const interventionFilter: Filter = {
      where: {
        interventionId: id,
      },
    };
    const costSummary = await this.interventionSummaryCostsRepository.find(
      interventionFilter,
    );

    const nationalHHCount = [
      projectedHouseholds[0].population2021,
      projectedHouseholds[0].population2022,
      projectedHouseholds[0].population2023,
      projectedHouseholds[0].population2024,
      projectedHouseholds[0].population2025,
      projectedHouseholds[0].population2026,
      projectedHouseholds[0].population2027,
      projectedHouseholds[0].population2028,
      projectedHouseholds[0].population2029,
      projectedHouseholds[0].population2030,
    ];
    const nationalCoveragePerc = [
      (lsffSummaries[0] as any)['2021_effective_coverage_count_perc'],
      (lsffSummaries[0] as any)['2022_effective_coverage_count_perc'],
      (lsffSummaries[0] as any)['2023_effective_coverage_count_perc'],
      (lsffSummaries[0] as any)['2024_effective_coverage_count_perc'],
      (lsffSummaries[0] as any)['2025_effective_coverage_count_perc'],
      (lsffSummaries[0] as any)['2026_effective_coverage_count_perc'],
      (lsffSummaries[0] as any)['2027_effective_coverage_count_perc'],
      (lsffSummaries[0] as any)['2028_effective_coverage_count_perc'],
      (lsffSummaries[0] as any)['2029_effective_coverage_count_perc'],
      (lsffSummaries[0] as any)['2030_effective_coverage_count_perc'],
    ];

    console.log(nationalHHCount);
    console.log(nationalCoveragePerc);

    let cost = 0;
    if (
      costSummary &&
      costSummary.length > 0 &&
      costSummary[0].summaryCosts &&
      costSummary[0].summaryCosts.length > 0
    ) {
      cost = costSummary[0].summaryCosts[0].costs
        .find(val => val.section === 'Summaries')
        ?.costBreakdown.find(
          val => val.rowName === 'summary_avg_annual_total_cost',
        )?.year0 as number;
    }
    console.log(cost);

    const averageHHCovered =
      nationalCoveragePerc.reduce((acc, curr, index) => {
        if (nationalHHCount?.[index])
          return acc + (curr * (nationalHHCount[index] as number)) / 100;
        else return acc;
      }, 0) / 10;

    return new StandardJsonResponse<Array<object>>(
      `Intervention data returned.`,
      [
        {
          averageAnnualCost: cost,
          averageEffectivelyCoveredHouseholds: averageHHCovered,
          costPerHouseholdCovered: cost / averageHHCovered,
        },
      ],
      'InterventionRecurringCosts',
    );
  }

  @get('/interventions/{id}/effectiveness-summary')
  async getLsffSummary(
    @param.path.number('id') id: number,
    @param.query.string('aggregation') aggregation?: string,
    @param.query.string('metric') metric?: string,
  ): Promise<StandardJsonResponse<Array<{}>>> {
    const lsffSummaries = await this.getEffectivenessSummaries(
      id,
      aggregation,
      metric,
    );

    // console.log(body);
    //body.filter(val => val.admin0Name !== '');

    return new StandardJsonResponse<Array<object>>(
      `Intervention data returned.`,
      lsffSummaries,
      'InterventionRecurringCosts',
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
                type: {
                  type: 'string',
                },
                targetVal: {
                  type: 'number',
                },
                year0: {
                  type: 'number',
                },
                year0Overriden: {
                  type: 'number',
                  maximum: 1,
                  minimum: 0,
                },
                year1: {
                  type: 'number',
                },
                year1Overriden: {
                  type: 'number',
                  maximum: 1,
                  minimum: 0,
                },
                year2: {
                  type: 'number',
                },
                year2Overriden: {
                  type: 'number',
                  maximum: 1,
                  minimum: 0,
                },
                year3: {
                  type: 'number',
                },
                year3Overriden: {
                  type: 'number',
                  maximum: 1,
                  minimum: 0,
                },
                year4: {
                  type: 'number',
                },
                year4Overriden: {
                  type: 'number',
                  maximum: 1,
                  minimum: 0,
                },
                year5: {
                  type: 'number',
                },
                year5Overriden: {
                  type: 'number',
                  maximum: 1,
                  minimum: 0,
                },
                year6: {
                  type: 'number',
                },
                year6Overriden: {
                  type: 'number',
                  maximum: 1,
                  minimum: 0,
                },
                year7: {
                  type: 'number',
                },
                year7Overriden: {
                  type: 'number',
                  maximum: 1,
                  minimum: 0,
                },
                year8: {
                  type: 'number',
                },
                year8Overriden: {
                  type: 'number',
                  maximum: 1,
                  minimum: 0,
                },
                year9: {
                  type: 'number',
                },
                year9Overriden: {
                  type: 'number',
                  maximum: 1,
                  minimum: 0,
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
    // console.log(interventionUpdateDeltaList);

    const tx =
      await this.interventionDataRepository.dataSource.beginTransaction(
        IsolationLevel.READ_COMMITTED,
      );
    interventionUpdateDeltaList.map(async delta => {
      console.log({delta});
      let interventionUpdateDelta;

      if (delta.type && delta.type === 'premix') {
        interventionUpdateDelta = new FortificationLevel(delta);
        console.log(interventionUpdateDelta);
        await this.fortificationLevelRepository.updateAll(
          interventionUpdateDelta,
          {
            interventionId: id,
            rowIndex: interventionUpdateDelta.rowIndex,
          },
          {
            transaction: tx,
          },
        );
      } else if (delta.type && delta.type === 'intervention-thresholds') {
        interventionUpdateDelta = new InterventionThresholds(delta);
        console.log(interventionUpdateDelta);
        await this.interventionThresholdsRepository.updateAll(
          interventionUpdateDelta,
          {
            interventionId: id,
          },
          {
            transaction: tx,
          },
        );
      } else {
        interventionUpdateDelta = new InterventionData(delta);
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
      }
    });

    await tx.commit();

    // Fetch the intervention
    const intFilter: Filter = {
      where: {
        id: id,
      },
    };
    let intervention = (
      await this.interventionListRepository.find(intFilter)
    )[0];

    const formulaeFilter = {
      where: {
        interventionId: intervention.id,
      },
    };
    const formulae = await this.interventionCellFormulaDepsRepository.find(
      formulaeFilter,
    );

    jsonLogicParser.add_operation('roundup', (value, decimals = 0) => {
      const multiplier = Math.pow(10, decimals);
      return Math.ceil(Number(value) * multiplier) / multiplier;
    });

    /**
     *  Calculate the total or cumulative value obtained by adding together individual values
     *
     * @param {Array<number>} value - An array of values to be summed up.
     * @returns {number} - The total value of all input values.
     */
    jsonLogicParser.add_operation('sum', (...values) => {
      return Number(values.reduce((acc, curr) => acc + Number(curr), 0));
    });

    /**
     *
     * Calculates the present value (PV) of a series of cash flows.
     *
     * @param {number} rate - The interest rate per period.
     * @param {number} nper - The number of periods.
     * @param {number} pmt - The payment amount per period.
     * @param {number} [fv=0] - The future value at the end of the series of cash flows (optional, default is 0).
     * @param {number} [type=0] - The timing of the payment: 0 for the end of the period, 1 for the beginning of the period (optional, default is 0).
     * @returns {number} The present value (PV) of the series of cash flows.
     */
    jsonLogicParser.add_operation('PV', (rate, nper, pmt, fv = 0, type = 0) => {
      if (rate === 0) {
        return -pmt * nper - fv;
      }
      const pv =
        -(
          (pmt * (1 + rate * type) * (Math.pow(1 + rate, nper) - 1)) / rate +
          fv
        ) / Math.pow(1 + rate, nper);
      return pv;
    });

    jsonLogicParser.add_operation('average', (...values) => {
      if (values.length === 0) return 0;

      const sum = values.reduce((acc, curr) => acc + Number(curr), 0);
      return sum / values.length;
    });

    // jsonLogicParser.add_operation('max', (...values) => {
    //   console.error(`MAX => `, values);
    //   if (values.length === 0) return 0; // Return 0 for an empty list of values

    //   console.error(values);
    //   values = values.map(x => Number(x));
    //   console.error(values);

    //   // Use the spread operator (...) to find the maximum value in the array of values
    //   return Math.max(...values);
    // });

    const dataResponse = await this.refreshFullData(intervention);
    const fullData = dataResponse.fullData;
    const dataVals = dataResponse.dataVals;

    for (const row of formulae) {
      if (!row.year0Overriden && row.year0Formula && row.rowIndex) {
        await this.processFormulaForRowYear(
          row,
          0,
          fullData,
          dataVals,
          intervention,
        );
      }
      if (!row.year1Overriden && row.year1Formula && row.rowIndex) {
        await this.processFormulaForRowYear(
          row,
          1,
          fullData,
          dataVals,
          intervention,
        );
      }
      if (!row.year2Overriden && row.year2Formula && row.rowIndex) {
        await this.processFormulaForRowYear(
          row,
          2,
          fullData,
          dataVals,
          intervention,
        );
      }
      if (!row.year3Overriden && row.year3Formula && row.rowIndex) {
        await this.processFormulaForRowYear(
          row,
          3,
          fullData,
          dataVals,
          intervention,
        );
      }
      if (!row.year4Overriden && row.year4Formula && row.rowIndex) {
        await this.processFormulaForRowYear(
          row,
          4,
          fullData,
          dataVals,
          intervention,
        );
      }
      if (!row.year5Overriden && row.year5Formula && row.rowIndex) {
        await this.processFormulaForRowYear(
          row,
          5,
          fullData,
          dataVals,
          intervention,
        );
      }
      if (!row.year6Overriden && row.year6Formula && row.rowIndex) {
        await this.processFormulaForRowYear(
          row,
          6,
          fullData,
          dataVals,
          intervention,
        );
      }
      if (!row.year7Overriden && row.year7Formula && row.rowIndex) {
        await this.processFormulaForRowYear(
          row,
          7,
          fullData,
          dataVals,
          intervention,
        );
      }
      if (!row.year8Overriden && row.year8Formula && row.rowIndex) {
        await this.processFormulaForRowYear(
          row,
          8,
          fullData,
          dataVals,
          intervention,
        );
      }
      if (!row.year9Overriden && row.year9Formula && row.rowIndex) {
        await this.processFormulaForRowYear(
          row,
          9,
          fullData,
          dataVals,
          intervention,
        );
      }

      // console.log(`Row #${row.rowIndex}`);
      /*
        // console.log(row.year0Formula);
        const year0Formula = formulaToJsonLogic(row.year0Formula, fullData);
        // console.log(inspect(year0Formula, false, null, false));
        const year0NewValue = jsonLogicParser.apply(year0Formula);
        const dataValsIndex = fullData[row.rowIndex].index;

        if (dataVals[dataValsIndex].year0 != year0NewValue) {
          console.log(`Row #${row.rowIndex}`);
          console.log(row.year0Formula);
          console.log(inspect(year0Formula, false, null, false));
          console.log(
            `Year0: ${dataVals[dataValsIndex].year0} => ${year0NewValue}`,
          );

          // Update the data for jsonLogic
          fullData[row.rowIndex].year0 = year0NewValue;

          // Update the data values model for the DB and commit
          dataVals[dataValsIndex].year0 = parseFloat(year0NewValue);
          await this.interventionDataRepository.update(dataVals[dataValsIndex]);

          console.log('---------------');
        } else {
          console.log(`Row #${row.rowIndex}`);
          console.log(row.year0Formula);
          console.log(inspect(year0Formula, false, null, false));
          console.log(`${dataVals[dataValsIndex].year0} => ${year0NewValue}`);
          console.log('---------------');
        } */

      // console.log('---------------');
    }

    // Fetch the intervention
    const filter: Filter = {
      where: {
        id: id,
      },
    };
    intervention = (await this.interventionListRepository.find(filter))[0];

    const data = new StandardJsonResponse<Array<InterventionList>>(
      `Intervention data updated`,
      [intervention],
      'InterventionList',
    );

    // console.log(data);

    //this.response.set('Access-Control-Allow-Methods', '*');
    //this.response.status(200).send(data);
    // Return the HTTP response object so that LoopBack framework skips the
    // generation of HTTP response
    return data;
  }

  async processFormulaForRowYear(
    row: any,
    year: number,
    fullData: any,
    dataVals: any,
    intervention: InterventionList,
  ) {
    // console.log(`${row.rowIndex}, Year${year}`);

    const formula = formulaToJsonLogic(row[`year${year}Formula`], fullData);
    // console.log(inspect(year0Formula, false, null, false));
    const newValue = jsonLogicParser.apply(formula);
    const dataValsIndex = fullData[row.rowIndex].index;

    if (dataVals[dataValsIndex][`year${year}`] != newValue) {
      // console.log(`Row #${row.rowIndex}`);
      // console.log(row[`year${year}Formula`]);
      // console.log(inspect(formula, false, null, false));
      // console.log(
      //   `Year${year}: ${dataVals[dataValsIndex][`year${year}`]} => ${newValue}`,
      // );

      // Update the data for jsonLogic
      fullData[row.rowIndex][`year${year}`] = newValue;

      // Update the data values model for the DB and commit
      dataVals[dataValsIndex][`year${year}`] = parseFloat(newValue);
      await this.interventionDataRepository.update(dataVals[dataValsIndex]);

      // console.log('---------------');
    } else {
      // console.log(`Row #${row.rowIndex}`);
      // console.log(row[`year${year}Formula`]);
      // console.log(inspect(formula, false, null, false));
      // console.log(`${dataVals[dataValsIndex][`year${year}`]} => ${newValue}`);
      // console.log('---------------');
    }
  }

  async refreshFullData(intervention: InterventionList) {
    const dataFilter = {
      where: {
        interventionId: intervention.id,
      },
    };
    const dataVals = await this.interventionDataRepository.find(dataFilter);
    const fullData = dataVals.reduce(
      (accumulator, currentValue, currentIndex) => {
        if (currentValue.rowIndex) {
          accumulator[currentValue.rowIndex] = {
            index: currentIndex,
            year0: Number(currentValue.year0),
            year1: Number(currentValue.year1),
            year2: Number(currentValue.year2),
            year3: Number(currentValue.year3),
            year4: Number(currentValue.year4),
            year5: Number(currentValue.year5),
            year6: Number(currentValue.year6),
            year7: Number(currentValue.year7),
            year8: Number(currentValue.year8),
            year9: Number(currentValue.year9),
          };
        }
        return accumulator;
      },
      {} as {
        [key: number]: {
          index: number;
          year0: number | undefined;
          year1: number | undefined;
          year2: number | undefined;
          year3: number | undefined;
          year4: number | undefined;
          year5: number | undefined;
          year6: number | undefined;
          year7: number | undefined;
          year8: number | undefined;
          year9: number | undefined;
        };
      },
    );

    (fullData as any)['regexes'] = {
      premix: 'Premix - .*',
      demographics: 'Demographics',
    };

    const premixFilter = {
      where: {
        interventionId: intervention.id,
      },
    };
    const premixCost = (
      await this.interventionPremixCostRepository.find(premixFilter)
    )[0];

    console.log(premixCost);

    (fullData as any)['premix'] = {
      year0: premixCost.premixCostPerMt,
      year1: premixCost.premixCostPerMt,
      year2: premixCost.premixCostPerMt,
      year3: premixCost.premixCostPerMt,
      year4: premixCost.premixCostPerMt,
      year5: premixCost.premixCostPerMt,
      year6: premixCost.premixCostPerMt,
      year7: premixCost.premixCostPerMt,
      year8: premixCost.premixCostPerMt,
      year9: premixCost.premixCostPerMt,
    };

    (fullData as any)['demographics'] = {
      year0: 120812698,
      year1: 123771387,
      year2: 126750868,
      year3: 129749447,
      year4: 132765521,
      year5: 135796650,
      year6: 138839374,
      year7: 141889688,
      year8: 144944302,
      year9: 148001185,
    };

    return {dataVals, fullData};
  }
}
