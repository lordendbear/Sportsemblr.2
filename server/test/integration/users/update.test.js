/* eslint-env mocha */
import { expect } from 'chai';
import request from 'supertest';

import inititalizeApp from '../../..//config/app';
import User from '../../../api/users/user.model';

import config from '../config';
import * as testUtils from '../utils';

import { Types } from 'mongoose';

describe('POST /api/users/{id}', () => {
  let dbUser;
  let updatedUser;
  let app;

  beforeEach((done) => {
    app = inititalizeApp(config);

    dbUser = {
      email: 'branstark@gmail.com',
      password: 'mypassword',
      name: 'Bran Stark',
      role: 'admin',
      id: 1
    };

    updatedUser = {
      email: 'sousa.dfs@gmail.com',
      password: '123456',
      name: 'Daniel Sousa',
      id: 2
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

  it('should update user data when request is ok', (done) => {
    request(app)
      .put(`/api/users/${dbUser.id}`)
      .send(updatedUser)
      .expect(200)
      .then((res) => {
        expect(res.body.email).to.equal(updatedUser.email);
        expect(res.body.name).to.equal(updatedUser.name);

        done();
      });
  });

  it('should return 404 when user does not exist', (done) => {
    const id = new Types.ObjectId();
    request(app)
      .put(`/api/users/${id}`)
      .send(updatedUser)
      .expect(404)
      .then(() => {
        done();
      });
  });
});