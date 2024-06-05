import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'opencpu',
  connector: 'rest',
  baseURL: process.env.OCPU_URL + '/ocpu',
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
          process.env.OCPU_URL +
          '/ocpu/apps/' +
          process.env.OCPU_BIOMARKER_PACKAGE +
          '/R/' +
          process.env.OCPU_BIOMARKER_FUNCTION +
          '/json',
        body: {
          theData: '{theData:object}',
          biomarkerField: '{biomarkerField:string}',
          aggregationField: '{aggregationField:string}',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          group_id: '{groupId:string}',
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
    {
      template: {
        method: 'POST',
        url:
          process.env.OCPU_URL +
          '/ocpu/apps/' +
          process.env.OCPU_EFFECTIVENESS_PACKAGE +
          '/R/' +
          process.env.OCPU_EFFECTIVENESS_FUNCTION +
          '/json',
        body: {
          householdDetails: '{householdDetails:object}',
          householdConsumption: '{householdConsumption:object}',
          nctList: '{nctList:object}',
          intakeThresholds: '{intakeThresholds:object}',
        },
        fullResponse: true,
      },
      functions: {
        baselineInadequacy: [
          'householdDetails',
          'householdConsumption',
          'nctList',
          'intakeThresholds',
        ],
      },
    },
    {
      template: {
        method: 'POST',
        url:
          process.env.OCPU_URL +
          '/ocpu/apps/' +
          process.env.OCPU_EFFECTIVENESS_PACKAGE +
          '/R/' +
          process.env.OCPU_EFFECTIVENESS_FUNCTION +
          'CND' +
          '/json',
        body: {
          householdDetails: '{householdDetails:object}',
          householdConsumption: '{householdConsumption:object}',
          nctList: '{nctList:object}',
          intakeThresholds: '{intakeThresholds:object}',
        },
        fullResponse: true,
      },
      functions: {
        baselineInadequacyCND: [
          'householdDetails',
          'householdConsumption',
          'nctList',
          'intakeThresholds',
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
  implements LifeCycleObserver
{
  static dataSourceName = 'opencpu';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.opencpu', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
