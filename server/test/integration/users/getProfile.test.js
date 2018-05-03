/* eslint-env mocha */
import { expect } from 'chai';
import request from 'supertest';

import inititalizeApp from '../../../config/app';
import User from '../../../api/users/user.model';

import config from '../config';
import * as testUtils from '../utils';

import { Types } from 'mongoose';

describe('GET /api/users/{id}', () => {
  let dbUser;
  let updatedUser;
  let app;

  beforeEach((done) => {
    app = inititalizeApp(config);

    dbUser = {
      email: 'branstark@gmail.com',
      password: 'mypassword',
      name: 'Bran Stark',
      role: 'admin'
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

  it('should return user data when request is ok', (done) => {
    const id = dbUser._id;

    request(app)
      .get(`/api/users/${id}`)
      .expect(200)
      .then((res) => {
        expect(res.body.email).to.equal(dbUser.email);
        expect(res.body.name).to.equal(dbUser.name);

        done();
      });
  });

  it('should return 404 when user does not exist', (done) => {
    const id = new Types.ObjectId();

    request(app)
      .get(`/api/users/${id}`)
      .expect(404)
      .then(() => {
        done();
      });
  });
});