import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import initializePassport from './passport';
import initializeDb from './db';
import initializeApi from '../api';
import initializeUtils from '../utils';
import initializeAuthMiddleware from '../middleware/auth';

export default function (config) {
  let app = express();
  app.server = http.createServer(app);

  if (config.env === 'dev') {
    app.use(morgan('dev'));
  }

  const { passport, strategies } = initializePassport(config);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cors());

  app.use(passport.initialize());
  passport.use('jwt', strategies.jwt);

  const utils = initializeUtils(config);

  const authMiddleware = initializeAuthMiddleware(passport);

  const middleware = {
    authMiddleware
  }

  initializeDb(config);

  initializeApi(app, config, utils, middleware);

  return app;
}