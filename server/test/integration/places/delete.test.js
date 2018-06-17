/* eslint-env mocha */
import { expect } from 'chai';
import request from 'supertest';

import inititalizeApp from '../../../config/app';
import Place from '../../../api/place/place.model';

import config from '../config';
import * as testUtils from '../utils';

describe('DELETE /api/places/{id}', () => {
  let dbPlace;
  let app;

  beforeEach((done) => {
    app = inititalizeApp(config);

    dbPlace = {
      name: 'Test Place'
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

  // it('should delete place when id is found', (done) => {
  //   request(app)
  //     .delete(`/api/places/${dbPlace._id}`)
  //     .expect(204)
  //     .then(() => {
  //       done();
  //     });
  // });
});