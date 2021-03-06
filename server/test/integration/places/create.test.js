/* eslint-env mocha */
import { expect } from 'chai';
import request from 'supertest';

import inititalizeApp from '../../../config/app';
import Place from '../../../api/place/place.model';

import config from '../config';
import * as testUtils from '../utils';

describe('POST /api/places', () => {
  let dbPlace;
  let place;
  let app;
  let token;
  let user;

  beforeEach((done) => {
    app = inititalizeApp(config);

    dbPlace = {
      name: 'Db place'
    };

    place = {
      name: 'test place'
    };

    user = {
      email: 'sousa.dfs@gmail.com',
      password: '123456',
      name: 'Daniel Sousa',
    };

    Place.remove({})
      .then(() => {
        return Place.create(dbPlace);
      })
      .then((savedPlace) => {
        dbPlace = savedPlace;

        return request(app)
          .post('/api/users')
          .send(user)
      })
      .then((response) => {
        return request(app)
          .post('/api/login')
          .send(user);
      })
      .then((response) => {
        token = response.body.token;
        done();
      })
      .catch(err => {
        done(err);
      });

  });

  afterEach((done) => {
    testUtils.dropDatabase(done);
  });

  it('should create a new place when request is ok', (done) => {
    request(app)
      .post('/api/places')
      .set('Authorization', `Bearer ${token}`)
      .send(place)
      .expect(200)
      .then((res) => {
        expect(res.body.name).to.equal(place.name);

        done();
      });
  });

  it('should return 400 when no place', (done) => {
    request(app)
      .post('/api/places')
      .set('Authorization', `Bearer ${token}`)
      .send()
      .expect(400)
      .then(() => {
        done();
      });
  });

  it('should return 400 when no name', (done) => {
    request(app)
      .post('/api/places')
      .set('Authorization', `Bearer ${token}`)
      .send({})
      .expect(400)
      .then(() => {
        done();
      });
  });
});