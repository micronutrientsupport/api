// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
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
}
