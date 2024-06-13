import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {OpencpuDataSource} from '../datasources';

export interface OpencpuService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  summaryStats(
    theData: object,
    biomarkerField: string,
    aggregationField: string,
    groupId: string,
    thresholds: object,
  ): Promise<{}>;

  calculatePreAndPostLSFFSummariesAfe(
    survey: number,
    micronutrient: object,
    intakeThresholds: object,
    fortifiableFoodItems: object,
    fortificationLevels: object,
    aggregationFields: object,
  ): Promise<{}>;

  calculatePreAndPostLSFFSummariesCnd(
    survey: number,
    micronutrient: object,
    intakeThresholds: object,
    fortifiableFoodItems: object,
    fortificationLevels: object,
    aggregationFields: object,
  ): Promise<{}>;
}

export class OpencpuServiceProvider implements Provider<OpencpuService> {
  constructor(
    // opencpu must match the name property in the datasource json file
    @inject('datasources.opencpu')
    protected dataSource: OpencpuDataSource = new OpencpuDataSource(),
  ) {}

  value(): Promise<OpencpuService> {
    return getService(this.dataSource);
  }
}

export interface OcpuLibrary {
  name: string;
}
