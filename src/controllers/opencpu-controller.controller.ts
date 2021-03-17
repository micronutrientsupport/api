// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, param} from '@loopback/rest';
import {OcpuLibrary, OpencpuService} from '../services';


export class OpencpuControllerController {
  constructor(
    @inject('services.OpencpuService')
    protected opencpuService: OpencpuService,
  ) { }

  @get('/library/{string}/{pattern}/{replacement}', {
    summary: 'OpenCPU StringReplace',
    responses: {
      '200': 'Thing',
    },
  }
  )
  async stringReplace(
    @param.path.string('string') string: string,
    @param.path.string('pattern') pattern: string,
    @param.path.string('replacement') replacement: string
  ): Promise<OcpuLibrary> {
    return await this.opencpuService.stringReplace(string, pattern, replacement);
  }

  @get('/lib', {
    summary: 'OpenCPU Lib',
    responses: {
      '200': 'Thing',
    },
  })
  async getLib(): Promise<string[]> {
    let lib = await this.opencpuService.library();
    return lib.split("\n");
  }
}
