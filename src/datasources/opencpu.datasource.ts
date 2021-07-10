import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'opencpu',
  connector: 'rest',
  baseURL: 'https://opencpu.micronutrient.support/ocpu/',
  options: {
    //headers: {
    //  accept: "application/json",
    //  "content-type": "application/json"
    //},
  },
  operations: [
    {
      template: {
        method: 'POST',
        url:
          'https://opencpu.micronutrient.support/ocpu/apps/micronutrientsupport/biomarkerstats/R/SummaryStats/json',
        body: {
          theData: '{theData:object}',
          biomarkerField: '{biomarkerField:string}',
          aggregationField: '{aggregationField:string}',
          groupId: '{groupId:string}',
          thresholds: '{thresholds:object}',
        },
        fullResponse: true,
      },
      functions: {
        summaryStats: [
          'theData',
          'biomarkerField',
          'aggregationField',
          'groupId',
          'thresholds',
        ],
      },
    },
  ],
  crud: false,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class OpencpuDataSource
  extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'opencpu';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.opencpu', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
