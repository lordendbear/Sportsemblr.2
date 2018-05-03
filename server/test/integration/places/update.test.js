/* eslint-env mocha */
import { expect } from 'chai';
import request from 'supertest';

import inititalizeApp from '../../../config/app';
import Place from '../../../api/place/place.model';

import config from '../config';
import * as testUtils from '../utils';

import { Types } from 'mongoose';

describe('POST /api/places/{id}', () => {
  let dbPlace;
  let updatedPlace;
  let app;

  beforeEach((done) => {
    app = inititalizeApp(config);

    dbPlace = {
      title: 'Place in db'
    };

    updatedPlace = {
      title: 'Updated place'
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

  it('should update place data when request is ok', (done) => {
    request(app)
      .put(`/api/places/${dbPlace.id}`)
      .send(updatedPlace)
      .expect(200)
      .then((res) => {
        expect(res.body.title).to.equal(updatedPlace.title);

        done();
      });
  });

  it('should return 404 when place does not exist', (done) => {
    const id = new Types.ObjectId();
    request(app)
      .put(`/api/places/${id}`)
      .send(updatedPlace)
      .expect(404)
      .then(() => {
        done();
      });
  });
});