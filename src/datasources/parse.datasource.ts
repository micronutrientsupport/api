import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'parse',
  connector: 'rest',
  baseURL: `${process.env.PARSE_APP_URL}`,
  operations: [
    {
      template: {
        method: 'POST',
        url: `${process.env.PARSE_APP_URL}/login`,
        headers: {
          'X-Parse-Application-Id': process.env.PARSE_APP_ID,
          // 'X-Parse-Revocable-Session': 1,
        },
        body: {
          username: '{username:string}',
          password: '{password:string}',
        },
        fullResponse: false,
      },
      functions: {
        login: ['username', 'password'],
      },
    },
    {
      template: {
        method: 'POST',
        url: `${process.env.PARSE_APP_URL}/logout`,
        headers: {
          'X-Parse-Application-Id': process.env.PARSE_APP_ID,
          'X-Parse-Session-Token': '{token:string}',
        },
        body: {},
        fullResponse: false,
      },
      functions: {
        logout: ['token'],
      },
    },
    {
      template: {
        method: 'POST',
        url: `${process.env.PARSE_APP_URL}/users`,
        headers: {
          'X-Parse-Application-Id': process.env.PARSE_APP_ID,
          // 'X-Parse-Revocable-Session': 1,
        },
        body: {
          username: '{username:string}',
          password: '{password:string}',
          email: '{email:string}',
          name: '{name:string}',
          organisation: '{organisation:string}',
        },
        fullResponse: false,
      },
      functions: {
        register: ['username', 'password', 'email', 'name', 'organisation'],
      },
    },
    {
      template: {
        method: 'GET',
        url: `${process.env.PARSE_APP_URL}/users/me`,
        headers: {
          'user-agent': 'node.js',
          'X-Parse-Application-Id': process.env.PARSE_APP_ID,
          'X-Parse-Session-Token': '{token:string}',
        },
        body: {},
        fullResponse: false,
      },
      functions: {
        getProfile: ['token'],
      },
    },
    {
      /*
      Qeury string is the encoded version of:

        ?where=${encodeURIComponent(
          JSON.stringify({
            $relatedTo: {
              object: {
                __type: 'Pointer',
                className: '_User',
                objectId: 'nHqmDp1B3Z',
              },
              key: 'badges',
            },
          }),
        )}`,
        */
      template: {
        method: 'GET',
        url: `${process.env.PARSE_APP_URL}/classes/badges`,
        query: {
          where: {
            $relatedTo: {
              object: {
                __type: 'Pointer',
                className: '_User',
                objectId: '{userId:string}',
              },
              key: 'badges',
            },
          },
          //where: '%7B%22%24relatedTo%22%3A%7B%22object%22%3A%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22_User%22%2C%22objectId%22%3A%22{userId:string}%22%7D%2C%22key%22%3A%22badges%22%7D%7D"',
        },
        headers: {
          'user-agent': 'node.js',
          'X-Parse-Application-Id': process.env.PARSE_APP_ID,
          'X-Parse-Session-Token': '{token:string}',
        },
        body: {},
        fullResponse: false,
      },
      functions: {
        getBadges: ['token', 'userId'],
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
export class ParseDataSource
  extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'parse';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.parse', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
