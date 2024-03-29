<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/micronutrientsupport/glossary">
    <img src="https://avatars3.githubusercontent.com/u/59699004?s=400" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">MAPS Data Access API</h3>

  <p align="center">
    API for accessing data
    <br />
    <a href="https://api.micronutrient.support/">API</a>
    .
    <a href="https://api.micronutrient.support/explorer">OpenAPI explorer</a>
    .
    <a href="https://github.com/micronutrientsupport/api/issues">Report Bug</a>
    ·
    <a href="https://github.com/micronutrientsupport/api/issues">Request Feature</a>
  </p>
</p>


This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).


## Set up the database

See the database repository on how to set up a database for the MAPS project.



## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Set up environment variables

- copy `.env.example` to `.env`
- fill in the various variables (descriptions of what the variables are is in the file). Make sure never to commit the `.env` file itself, as it will contain sensitive information such as passwords.

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run clean
npm run build
```

## Fix code style and formatting issues

If `eslint` and `prettier` are enabled for this project, you can use the
following commands to check code style and formatting issues.

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```

## Versioning

The API is automatically versioned using semvar versioning based on commit message history (https://www.conventionalcommits.org/en/v1.0.0/)

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)
