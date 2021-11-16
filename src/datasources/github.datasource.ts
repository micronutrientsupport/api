import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'github',
  connector: 'rest',
  baseURL: 'https://api.github.com',
  options: 'foo=bar',
  operations: [
    {
      template: {
        method: 'GET',
        url: 'https://api.github.com/users/{user}',
        headers: {
          'user-agent': 'node.js',
          Authorization: `token  ${process.env.GITHUB_TOKEN}`,
        },
        fullResponse: true,
      },
      functions: {
        getUser: ['user'],
      },
    },
    {
      template: {
        method: 'PUT',
        url: 'https://api.github.com/repos/{owner}/{repo}/contents/{path}',
        headers: {
          'user-agent': 'node.js',
          Authorization: `token  ${process.env.GITHUB_TOKEN}`,
        },
        body: {
          message: '{message}',
          content: '{contents}',
        },
        fullResponse: false,
      },
      functions: {
        commitFile: ['owner', 'repo', 'path', 'contents', 'message'],
      },
    },
    {
      template: {
        method: 'POST',
        url: 'https://api.github.com/repos/{owner}/{repo}/issues',
        headers: {
          'user-agent': 'node.js',
          Authorization: `token  ${process.env.GITHUB_TOKEN}`,
        },
        body: {
          title: '{title}',
          body: '{body}',
          labels: '{labels}',
        },
        fullResponse: false,
      },
      functions: {
        createIssue: ['owner', 'repo', 'title', 'body', 'labels'],
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
export class GithubDataSource
  extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'github';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.github', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
