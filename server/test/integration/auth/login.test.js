/* eslint-env mocha */
import { expect } from 'chai';
import request from 'supertest';

import inititalizeApp from '../../..//config/app';
import User from '../../../api/users/user.model';

import config from '../config';

import mongoose from 'mongoose';

describe('POST /api/login', () => {
    let dbUser;
    let user;
    let app;

    beforeEach((done) => {
        app = inititalizeApp(config);

        dbUser = {
            email: 'branstark@gmail.com',
            password: 'mypassword',
            name: 'Bran Stark',
            role: 'admin',
        };

        user = {
            email: 'sousa.dfs@gmail.com',
            password: '123456',
            name: 'Daniel Sousa',
        };

        User.create(dbUser, (err) => {
            if (err) {
                return done(err);
            }

            return done();
        });
    });

    afterEach((done) => {
        mongoose.connection.db.dropDatabase()
            .then(() => {
                return mongoose.connection.close();
            })
            .then(() => {
                done();
            })
            .catch(err => {
                done(err);
            });
    });

    it('should login user when request is ok', (done) => {
        request(app)
            .post('/api/login')
            .send(dbUser)
            .expect(200)
            .then((res) => {
                done();
            });
    });

    it('should return bad request when email is missing', (done) => {
        request(app)
            .post('/api/login')
            .send({ password: user.password })
            .expect(400)
            .then((res) => {
                done();
            });
    });

    it('should return bad request when password is missing', (done) => {
        request(app)
            .post('/api/login')
            .send({ email: user.email })
            .expect(400)
            .then((res) => {
                done();
            });
    });

    it('should return not found when no user exists', (done) => {
        request(app)
            .post('/api/login')
            .send(user)
            .expect(404)
            .then((res) => {
                done();
            });
    });

    it('should return unauthorized when passwords do not match', (done) => {
        request(app)
            .post('/api/login')
            .send({ email: dbUser.email, password: 'somepassword' })
            .expect(401)
            .then((res) => {
                done();
            });
    });
});