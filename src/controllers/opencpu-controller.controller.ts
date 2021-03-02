// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {get, param} from '@loopback/rest';
import {TmpRegionConsumptionRepository} from '../repositories';
import {HouseholdSummary, OcpuLibrary, OpencpuService} from '../services';


export class OpencpuControllerController {
  constructor(
    @inject('services.OpencpuService')
    protected opencpuService: OpencpuService,
    @repository(TmpRegionConsumptionRepository)
    public tmpRegionConsumptionRepository: TmpRegionConsumptionRepository
  ) { }

  @get('/library/{string}/{pattern}/{replacement}')
  async stringReplace(
    @param.path.string('string') string: string,
    @param.path.string('pattern') pattern: string,
    @param.path.string('replacement') replacement: string
  ): Promise<OcpuLibrary> {
    return await this.opencpuService.stringReplace(string, pattern, replacement);
  }

  @get('/agg')
  async getAgg(): Promise<object> {
    let data = await this.tmpRegionConsumptionRepository.find();
    let result = await this.opencpuService.naiveMean((data as unknown) as HouseholdSummary);
    console.log(result);
    return result;
  }

  @get('/lib')
  async getLib(): Promise<string[]> {
    let lib = await this.opencpuService.library();
    return lib.split("\n");
  }
}
