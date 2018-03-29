/* eslint-env mocha */
import { expect } from 'chai';
import request from 'supertest';

import inititalizeApp from '../../..//config/app';
import User from '../../../api/users/user.model';

import config from '../config';
import * as testUtils from '../utils';

describe('POST /api/users', () => {
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

    User.remove({}, () => {
      User.create(dbUser, (err, savedUser) => {
        if (err) {
          return done(err);
        }

        dbUser = savedUser;

        return done();
      });
    });
  });

  afterEach((done) => {
    testUtils.dropDatabase(done);
  });

  it('should register a new user when request is ok', (done) => {
    request(app)
      .post('/api/users')
      .send(user)
      .expect(200)
      .then((res) => {
        expect(res.body.email).to.equal(user.email);
        expect(res.body.name).to.equal(user.name);

        done();
      });
  });

  it('should return 400 when email exists', (done) => {
    request(app)
      .post('/api/users')
      .send(dbUser)
      .expect(400)
      .then(() => {
        done();
      });
  });

  it('should return 400 when no user', (done) => {
    request(app)
      .post('/api/users')
      .send()
      .expect(400)
      .then(() => {
        done();
      });
  });

  it('should return 400 when no password', (done) => {
    request(app)
      .post('/api/users')
      .send({ email: user.email })
      .expect(400)
      .then(() => {
        done();
      });
  });

  it('should return 400 when no password', (done) => {
    request(app)
      .post('/api/users')
      .send({ password: user.password })
      .expect(400)
      .then(() => {
        done();
      });
  });
});