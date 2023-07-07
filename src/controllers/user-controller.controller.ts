// Uncomment these imports to begin using these cool features!

import {inject, service} from '@loopback/core';
import {
  Response,
  RestBindings,
  get,
  param,
  post,
  requestBody,
} from '@loopback/rest';
import {
  ParseError,
  ParseErrorResponse,
  ParseProfile,
  ParseService,
  ParseServiceProvider,
  ParseUser,
  parseStringifiedJson,
} from '../services';
import {StandardJsonResponse} from './standardJsonResponse';

// import {inject} from '@loopback/core';

export class UserControllerController {
  constructor(
    @service(ParseServiceProvider)
    public parseService: ParseService,
    @inject(RestBindings.Http.RESPONSE) protected response: Response,
  ) {}

  @post('/user/login')
  async userLogin(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            title: 'LoginBody',
            required: ['username', 'password'],
            type: 'object',
            properties: {
              username: {
                description: 'The username to login',
                type: 'string',
              },
              password: {
                description: 'The password for the user',
                type: 'string',
              },
            },
          },
        },
      },
    })
    body: {
      username: string;
      password: string;
    },
  ): Promise<object> {
    try {
      const userResponse = await this.parseService.login(
        body.username,
        body.password,
      );
      console.log(userResponse);
      const user: ParseUser = {
        id: userResponse.objectId,
        username: userResponse.username,
        sessionToken: userResponse.sessionToken,
        profilePic: userResponse.profilePic?.url,
      };
      return new StandardJsonResponse<Array<ParseUser>>(
        `Logged in as ${user.username}.`,
        [user],
        'ParseUser',
      );
    } catch (e: any) {
      const err: ParseErrorResponse = e;
      this.response.status(err.statusCode);
      console.log(err);
      return new StandardJsonResponse<null>(
        parseStringifiedJson<ParseError>(err.message).error,
        null,
        '',
        `${err.statusCode}`,
      );
    }
  }

  @post('/user/logout')
  async userLogout(
    @param.header.string('X-Session-Token', {
      description: 'Session token returned by `/user/login`',
      required: true,
      example: 'r:123456789abc',
    })
    sessionToken: string,
  ): Promise<object> {
    try {
      const userResponse = await this.parseService.logout(sessionToken);
      return new StandardJsonResponse<[]>(
        `Logged out successfully.`,
        [],
        'ParseUser',
      );
    } catch (e: any) {
      const err: ParseErrorResponse = e;
      this.response.status(err.statusCode);
      return new StandardJsonResponse<null>(
        parseStringifiedJson<ParseError>(err.message).error,
        null,
        '',
        `${err.statusCode}`,
      );
    }
  }

  @post('/user/register')
  async userRegister(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            title: 'RegisterBody',
            required: ['username', 'password', 'email'],
            type: 'object',
            properties: {
              username: {
                description: 'The username to login',
                type: 'string',
              },
              password: {
                description: 'The password for the user',
                type: 'string',
              },
              email: {
                description: 'The email address for the user',
                type: 'string',
              },
              name: {
                description: 'The full name for the user',
                type: 'string',
              },
              organisation: {
                description: 'The organisation the user works for',
                type: 'string',
              },
            },
          },
        },
      },
    })
    body: {
      username: string;
      password: string;
      email: string;
      name?: string;
      organisation?: string;
    },
  ): Promise<object> {
    try {
      const userResponse = await this.parseService.register(
        body.username,
        body.password,
        body.email,
        body.name,
        body.organisation,
      );

      const userProfileResponse = await this.parseService.getProfile(
        userResponse.sessionToken,
      );

      const user: ParseUser = {
        id: userResponse.objectId,
        username: userResponse.username,
        sessionToken: userResponse.sessionToken,
        profilePic: userProfileResponse.profilePic?.url,
      };

      return new StandardJsonResponse<Array<ParseUser>>(
        `Successfully registered as ${body.username}.`,
        [user],
        'ParseUser',
      );
    } catch (e: any) {
      const err: ParseErrorResponse = e;
      this.response.status(err.statusCode);
      return new StandardJsonResponse<null>(
        parseStringifiedJson<ParseError>(err.message).error,
        null,
        '',
        `${err.statusCode}`,
      );
    }
  }

  @get('/user/profile')
  async userGetProfile(
    @param.header.string('X-Session-Token', {
      description: 'Session token returned by `/user/login`',
      required: true,
      example: 'r:123456789abc',
    })
    sessionToken: string,
  ): Promise<object> {
    try {
      const userProfileResponse = await this.parseService.getProfile(
        sessionToken,
      );
      const userBadgesResponse = await this.parseService.getBadges(
        sessionToken,
        userProfileResponse.objectId,
      );
      console.log(userBadgesResponse);
      const profile: ParseProfile = {
        id: userProfileResponse.objectId,
        username: userProfileResponse.username,
        email: userProfileResponse.email,
        profilePic: userProfileResponse.profilePic?.url,
        name: userProfileResponse.name ? userProfileResponse.name : '',
        organisation: userProfileResponse.organisation
          ? userProfileResponse.organisation
          : '',
        registrationDate: new Date(userProfileResponse.createdAt),
        updatedDate: new Date(userProfileResponse.updatedAt),
        badges: userBadgesResponse.results.map(badge => {
          return {
            title: badge.name,
            description: badge.description,
            url: badge.url,
            image: badge.image.url,
          };
        }),
      };
      return new StandardJsonResponse<Array<ParseProfile>>(
        `Fetched profile successfully.`,
        [profile],
        'ParseUser',
      );
    } catch (e: any) {
      console.log(e);
      const err: ParseErrorResponse = e;
      this.response.status(err.statusCode);
      return new StandardJsonResponse<null>(
        parseStringifiedJson<ParseError>(err.message).error,
        null,
        '',
        `${err.statusCode}`,
      );
    }
  }
}
