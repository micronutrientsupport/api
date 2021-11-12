import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {GithubDataSource} from '../datasources';

export interface GithubService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getUser(user: string): Promise<object>;
  commitFile(
    owner: string,
    repo: string,
    path: string,
    contents: string,
    message: string,
  ): Promise<{
    content: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      download_url: string;
    };
  }>;
  createIssue(
    owner: string,
    repo: string,
    title: string,
    body: string,
    labels: string[],
  ): Promise<{url: string}>;
}

export class GithubProvider implements Provider<GithubService> {
  constructor(
    // github must match the name property in the datasource json file
    @inject('datasources.github')
    protected dataSource: GithubDataSource = new GithubDataSource(),
  ) {}

  value(): Promise<GithubService> {
    return getService(this.dataSource);
  }
}
