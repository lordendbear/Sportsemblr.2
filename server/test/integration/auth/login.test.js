/* eslint-env mocha */
import { expect } from 'chai';
import request from 'supertest';

import inititalizeUtils from '../../../utils';
import inititalizeApp from '../../..//config/app';
import User from '../../../api/users/user.model';

import config from '../config';
import * as testUtils from '../utils';

describe('POST /api/login', () => {
  let dbUser;
  let user;
  let app;
  let password = 'somepassword';

  const { passwordHasher, tokenManager } = inititalizeUtils(config);

  const hashedPassword = passwordHasher.hashPassword(password);

  beforeEach((done) => {
    app = inititalizeApp(config);

    dbUser = {
      email: 'branstark@gmail.com',
      password: hashedPassword,
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
    user = null;
    dbUser = null;

    testUtils.dropDatabase(done);
  });

  it('should login user when request is ok', (done) => {
    const payload = {
      sub: dbUser._id
    }

    const token = tokenManager.encode(payload);

    request(app)
      .post('/api/login')
      .send({ email: dbUser.email, password })
      .expect(200)
      .then((res) => {
        expect(res.body.token).to.equal(token);

        done();
      });
  });

  it('should return bad request when email is missing', (done) => {
    request(app)
      .post('/api/login')
      .send({ password: user.password })
      .expect(400)
      .then(() => {
        done();
      });
  });

  it('should return bad request when password is missing', (done) => {
    request(app)
      .post('/api/login')
      .send({ email: user.email })
      .expect(400)
      .then(() => {
        done();
      });
  });

  it('should return not found when no user exists', (done) => {
    request(app)
      .post('/api/login')
      .send(user)
      .expect(404)
      .then(() => {
        done();
      });
  });

  it('should return unauthorized when passwords do not match', (done) => {
    request(app)
      .post('/api/login')
      .send({ email: dbUser.email, password: 'wrongpassword' })
      .expect(401)
      .then(() => {
        done();
      });
  });
});