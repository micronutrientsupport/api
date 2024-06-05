import {RestBindings} from '@loopback/rest';
import * as Sentry from '@sentry/node';
import {ApiApplication, ApplicationConfig} from './application';

export * from './application';

export async function main(options: ApplicationConfig = {}) {
  Sentry.init({
    dsn: 'https://b52e3657527d4f7b9d05a7fef89568a8@glitchtip.micronutrient.support/2',
  });

  const app = new ApiApplication(options);
  app.restServer.basePath(process.env.MOUNT_DIR);
  await app.boot();
  await app.start();

  app.bind(RestBindings.REQUEST_BODY_PARSER_OPTIONS).to({limit: '50mb'});

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +(process.env.PORT ?? 3000),
      host: process.env.HOST,
      // The `gracePeriodForClose` provides a graceful close for http/https
      // servers with keep-alive clients. The default value is `Infinity`
      // (don't force-close). If you want to immediately destroy all sockets
      // upon stop, set its value to `0`.
      // See https://www.npmjs.com/package/stoppable
      gracePeriodForClose: 5000, // 5 seconds
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        servers: [
          {url: 'http://localhost:3000'},
          {url: 'https://api.micronutrient.support/v2'},
        ],
        setServersFromRequest: false,
      },
      cors: {
        origin: '*',
        methods: '*',
        //methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        maxAge: 86400,
        credentials: true,
      },
    },
  };
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
