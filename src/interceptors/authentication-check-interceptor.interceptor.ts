import {
  inject,
  injectable,
  Interceptor,
  InvocationContext,
  InvocationResult,
  Provider,
  service,
  ValueOrPromise,
} from '@loopback/core';

import {Request, Response, RestBindings} from '@loopback/rest';
import {StandardJsonResponse} from '../controllers/standardJsonResponse';
import {
  ParseError,
  ParseErrorResponse,
  ParseService,
  ParseServiceProvider,
  parseStringifiedJson,
  ParseUser,
} from '../services';

export interface AuthenticatedRequest extends Request {
  user: ParseUser;
}

/**
 * This class will be bound to the application as an `Interceptor` during
 * `boot`
 */
@injectable({
  tags: {key: AuthenticationCheckInterceptorInterceptor.BINDING_KEY},
})
export class AuthenticationCheckInterceptorInterceptor
  implements Provider<Interceptor> {
  static readonly BINDING_KEY = `interceptors.${AuthenticationCheckInterceptorInterceptor.name}`;

  constructor(
    @service(ParseServiceProvider)
    public parseService: ParseService,
    @inject(RestBindings.Http.REQUEST) private request: Request,
    @inject(RestBindings.Http.RESPONSE) protected response: Response,
  ) {}

  /**
   * This method is used by LoopBack context to produce an interceptor function
   * for the binding.
   *
   * @returns An interceptor function
   */
  value() {
    return this.intercept.bind(this);
  }

  /**
   * The logic to intercept an invocation
   * @param invocationCtx - Invocation context
   * @param next - A function to invoke next interceptor or the target method
   */
  async intercept(
    invocationCtx: InvocationContext,
    next: () => ValueOrPromise<InvocationResult>,
  ) {
    try {
      // If the x-session-token is present, attempt to validate
      // the token and store user details in Request.user
      if (this.request.headers.hasOwnProperty('x-session-token')) {
        const token = this.request.headers['x-session-token'] as string;
        console.log(token);
        const userProfileResponse = await this.parseService.getProfile(token);
        const user: ParseUser = {
          id: userProfileResponse.objectId,
          username: userProfileResponse.username,
          sessionToken: token,
          profilePic: userProfileResponse.profilePic?.url,
        };
        (this.request as AuthenticatedRequest).user = user;
      }

      // Add pre-invocation logic here
      const result = await next();
      // Add post-invocation logic here
      return result;
    } catch (e) {
      const err: ParseErrorResponse = e as any;
      this.response.status(err.statusCode);
      console.log(err);
      return new StandardJsonResponse<null>(
        parseStringifiedJson<ParseError>(err.message).error,
        null,
        '',
        `${err.statusCode}`,
      );
      // Add error handling logic here
      throw err;
    }
  }
}
