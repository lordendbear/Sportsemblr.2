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

  beforeEach((done) => {
    app = inititalizeApp(config);

    dbPlace = {
      name: 'Db place'
    };

    place = {
      name: 'test place'
    };

    Place.remove({}, () => {
      Place.create(dbPlace, (err, savedPlace) => {
        if (err) {
          return done(err);
        }

        dbPlace = savedPlace;

        return done();
      });
    });
  });

  afterEach((done) => {
    testUtils.dropDatabase(done);
  });

  it('should create a new place when request is ok', (done) => {
    request(app)
      .post('/api/places')
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
      .send()
      .expect(400)
      .then(() => {
        done();
      });
  });

  it('should return 400 when no name', (done) => {
    request(app)
      .post('/api/places')
      .send({})
      .expect(400)
      .then(() => {
        done();
      });
  });
});