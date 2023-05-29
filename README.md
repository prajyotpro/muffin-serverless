## Description
muffin-serverless
The application is build on <a href="https://www.serverless.com/framework/docs">serverless</a> framework to deploy AWS Lambda behind AWS API Gateway.

## Tech Spec
- nodejs16
- Express with Typescript
- Serverless


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev


```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Dependent Services
MongoDB
``` bash
# installation
$ docker-compose up
```

## Environment Configuration
Enables developer to set latest .env configuration for local development environment.

``` bash
# export AWS Configuration
export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""
export AWS_SESSION_TOKEN=""

# update .env for local development
$ npm run config
```