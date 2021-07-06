// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, param} from '@loopback/rest';
import {OcpuLibrary, OpencpuService} from '../services';


export class OpencpuControllerController {
  constructor(
    @inject('services.OpencpuService')
    protected opencpuService: OpencpuService,
  ) { }

  @get('/library/{string}/{pattern}/{replacement}',
  {
    summary: 'The thing',
    responses: {}
  })
  async stringReplace(
    @param.path.string('string') string: string,
    @param.path.string('pattern') pattern: string,
    @param.path.string('replacement') replacement: string
  ): Promise<OcpuLibrary> {
    return this.opencpuService.stringReplace(string, pattern, replacement);
  }

  @get('/lib')
  async getLib(): Promise<string[]> {
    const lib = await this.opencpuService.library();
    return lib.split("\n");
  }
}
