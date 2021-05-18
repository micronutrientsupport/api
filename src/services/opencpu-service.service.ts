import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {OpencpuDataSource} from '../datasources';

export interface OpencpuService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  stringReplace(string: string, pattern: string, replacement: string): Promise<OcpuLibrary>;
  zinc(theData: object, groupId: string, tresholdUpper: number, thresholdLower: number): Promise<{}>;
  biomarker(biomarker: string, theData: object, groupId: string, tresholdUpper: number, thresholdLower: number): Promise<{}>;
  library(): string
}

export class OpencpuServiceProvider implements Provider<OpencpuService> {
  constructor(
    // opencpu must match the name property in the datasource json file
    @inject('datasources.opencpu')
    protected dataSource: OpencpuDataSource = new OpencpuDataSource(),
  ) { }

  value(): Promise<OpencpuService> {
    return getService(this.dataSource);
  }
}

export interface OcpuLibrary {
  name: string;
}
