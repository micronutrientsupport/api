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
        method: "POST",
        url: "https://opencpu.micronutrient.support/ocpu/user/biomarkers/library/summaryStats/R/zinc/json",
        body: {
          theData: "{theData:object}",
          groupId: "{groupId:string}",
          thresholdUpper: "{thresholdUpper:number}",
          thresholdLower: "{thresholdLower:number}"
        },
        fullResponse: true
      },
      functions: {
        zinc: ["theData", "groupId", "thresholdUpper", "thresholdLower"]
        // hello: ["string", "pattern", "replacement"]
      },
    },
    {
      template: {
        method: "POST",
        url: "https://opencpu.micronutrient.support/ocpu/user/biomarkers/library/summaryStats/R/{biomarker}/json",
        body: {
          theData: "{theData:object}",
          groupId: "{groupId:string}",
          thresholdUpper: "{thresholdUpper:number}",
          thresholdLower: "{thresholdLower:number}"
        },
        fullResponse: true
      },
      functions: {
        biomarker: ["biomarker", "theData", "groupId", "thresholdUpper", "thresholdLower"]
        // hello: ["string", "pattern", "replacement"]
      },
    },
    {
      template: {
        method: "POST",
        url: "https://opencpu.micronutrient.support/ocpu/library/stringr/R/str_replace/json",
        body: {
          string: "{string:string}",
          pattern: "{pattern:string}",
          replacement: "{replacement}"
        },
      },
      functions: {
        stringReplace: ["string", "pattern", "replacement"]
      },
    },
    {
      template: {
        method: "GET",
        url: "https://opencpu.micronutrient.support/ocpu/library",
      },
      functions: {
        library: []
      },
    }
  ],
  crud: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class OpencpuDataSource extends juggler.DataSource
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
