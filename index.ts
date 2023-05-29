import * as serverless from 'serverless-http';
import 'reflect-metadata';

import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

import './app/api/controller/HomeController';

const container = new Container();
const server = new InversifyExpressServer(container);

export const app = server.build();

module.exports.handler = serverless(app);