import {Provider, inject} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {ParseDataSource} from '../datasources';

export interface ParseService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  login(username: string, password: string): Promise<ParseLoginResponse>;
  logout(sessionToken: string): Promise<ParseLogoutResponse>;
  register(
    username: string,
    password: string,
    email: string,
    name?: string,
    oragnisation?: string,
  ): Promise<ParseRegisterResponse>;
  getProfile(sessionToken: string): Promise<ParseProfileResponse>;
  getBadges(sessionToken: string, userId: string): Promise<ParseBadgesResponse>;
}

export class ParseServiceProvider implements Provider<ParseService> {
  constructor(
    // parse must match the name property in the datasource json file
    @inject('datasources.parse')
    protected dataSource: ParseDataSource = new ParseDataSource(),
  ) {}

  value(): Promise<ParseService> {
    return getService(this.dataSource);
  }
}

export type Stringified<T> = string;

export function parseStringifiedJson<T>(string: Stringified<T>): T {
  return JSON.parse(string);
}

export interface ParseError {
  code: number;
  error: string;
}

export interface ParseErrorResponse {
  statusCode: number;
  message: Stringified<ParseError>;
}

export interface ParseLoginResponse {
  username: string;
  email: string;
  sessionToken: string;
}

export interface ParseRegisterResponse {
  objectId: string;
  createdAt: string;
  sessionToken: string;
}

export interface ParseLogoutResponse {}

export interface ParseProfileResponse {
  objectId: string;
  username: string;
  email: string;
  name: string;
  organisation: string;
  createdAt: string;
  updatedAt: string;
}

export interface ParseBadgesResponse {
  results: {
    name: string;
    url: string;
    description: string;
    image: {
      url: string;
    };
  }[];
}

export interface ParseUser {
  username: string;
  sessionToken: string;
}

export interface ParseProfile {
  id: string;
  username: string;
  email: string;
  name?: string;
  organisation?: string;
  registrationDate: Date;
  updatedDate: Date;
  badges?: any[];
  sessionToken?: string;
}
