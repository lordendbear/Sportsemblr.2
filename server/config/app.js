import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializePassport from './passport';

export default function (config) {
    let app = express();
    app.server = http.createServer(app);

    app.use(morgan('dev'));

    const { passport, strategies } = initializePassport(config);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(cors());

    app.use(passport.initialize());
    passport.use('jwt', strategies.jwt);

    return app;
}