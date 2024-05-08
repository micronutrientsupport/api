// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {Filter, repository} from '@loopback/repository';
import {get, getModelSchemaRef} from '@loopback/rest';
import {DataVersion} from '../models';
import {
  FctListFoodCompositionRepository,
  FoodGeneraRepository,
  FooditemRepository,
  HouseholdConsumptionRepository,
  HouseholdDetailsRepository,
  IntakeThresholdRepository,
  MicronutrientDropdownRepository,
} from '../repositories';
import {OpencpuService} from '../services';
import {StandardJsonResponse} from './standardJsonResponse';
import {StandardOpenApiResponses} from './standardOpenApiResponses';

// import {inject} from '@loopback/core';

export class SendDataControllerController {
  constructor(
    @inject('services.OpencpuService')
    protected opencpuService: OpencpuService,
    @repository(MicronutrientDropdownRepository)
    public micronutrientRepository: MicronutrientDropdownRepository,
    @repository(FoodGeneraRepository)
    public foodGeneraRepository: FoodGeneraRepository,
    @repository(HouseholdDetailsRepository)
    public householdDetailsRepository: HouseholdDetailsRepository,
    @repository(HouseholdConsumptionRepository)
    public householdConsumptionRepository: HouseholdConsumptionRepository,
    @repository(FooditemRepository)
    public fooditemRepository: FooditemRepository,
    @repository(IntakeThresholdRepository)
    public intakeThresholdRepository: IntakeThresholdRepository,
    @repository(FctListFoodCompositionRepository)
    public fctListFoodCompositionRepository: FctListFoodCompositionRepository,
  ) {}

  @get('self/email', {
    summary: 'Get metadata about API and data versions',
    description: 'Get metadata about API and data versions',
    tags: ['meta'],
    responses: new StandardOpenApiResponses(
      'Array of DataVersion model instances',
    )
      .setDataType('array')
      .setObjectSchema(getModelSchemaRef(DataVersion))
      .toObject(),
  })
  async find(): Promise<object> {
    const surveyFilter: Filter = {
      where: {
        surveyId: 1,
      },
      //limit: 5000,
    };

    let start = Date.now();
    const householdDetails = await this.householdDetailsRepository.find(
      surveyFilter,
    );
    let duration = (Date.now() - start) / 1000;
    console.log(
      `${householdDetails.length} household details fetched (${duration}s)`,
    );

    start = Date.now();
    // Reduce the array to distinct surveyIds
    const distinctFctListIds = householdDetails.reduce((acc, obj) => {
      // Add the surveyId to a Set to ensure uniqueness
      acc.add(obj.fctListId);
      return acc;
    }, new Set());

    // Convert the Set to an array
    const distinctFctListIdsArray = [...distinctFctListIds].filter(
      value => value !== null,
    );
    duration = (Date.now() - start) / 1000;
    console.log(`${distinctFctListIdsArray} distinct fcts, (${duration}s)`);

    /*
    const foodItems = await this.fooditemRepository.find();
    const fcts = foodItems.reduce((acc, curr) => {
      if (curr.fctSourceId) {
        if (!acc[curr.fctSourceId.toString()]) {
          acc[curr.fctSourceId] = [];
        }
        acc[curr.fctSourceId].push(curr);
      }
      return acc;
    }, {} as {[key: string]: Fooditem[]});
    console.log(`${Object.keys(fcts).length} fct tables fetched`);
*/
    start = Date.now();
    const householdConsumption = await this.householdConsumptionRepository.find(
      surveyFilter,
    );
    duration = (Date.now() - start) / 1000;
    console.log(
      `${householdConsumption.length} consumption records fetched, (${duration}s)`,
    );

    const fctListFilter: Filter = {
      where: {
        fctListId: {
          inq: distinctFctListIdsArray, // Define your array of possible values here
        },
      },
    };
    //const fctSource = await this.fctSourceRepository.find(omitGeometryFilter);

    // const micronutrients = await this.micronutrientRepository.find();
    // const foodGenera = await this.foodGeneraRepository.find();

    start = Date.now();
    const intakeThresholds = await this.intakeThresholdRepository.find();
    duration = (Date.now() - start) / 1000;
    console.log(
      `${intakeThresholds.length} intake thresholds fetched (${duration}s)`,
    );

    start = Date.now();
    const nctList = await this.fctListFoodCompositionRepository.find(
      fctListFilter,
    );
    duration = (Date.now() - start) / 1000;
    console.log(`${nctList.length} nct records fetched (${duration}s)`);

    console.log('---------------------------');
    console.log('Sending data to OpenCPU');

    start = Date.now();
    const foo = await this.opencpuService
      .baselineInadequacy(
        householdDetails,
        householdConsumption,
        nctList,
        intakeThresholds,
      )
      .catch(e => {
        console.error(e);
      });
    duration = (Date.now() - start) / 1000;

    console.log(
      `${(foo as any).body.length} inadequacy results (${duration}s)`,
    );

    // start = Date.now();
    // const bar = await this.opencpuService
    //   .baselineInadequacyCND(
    //     householdDetails,
    //     householdConsumption,
    //     nctList,
    //     intakeThresholds,
    //   )
    //   .catch(e => console.error(e));
    // duration = (Date.now() - start) / 1000;

    // console.log(
    //   `${(bar as any).body.length} inadequacy CND results (${duration}s)`,
    // );

    return new StandardJsonResponse<Array<{}>>(
      `1 data email sent.`,
      [
        {
          inad: (foo as any).body,
          // , inadCND: (bar as any).body
        },
      ],
      '',
    );
  }
}
