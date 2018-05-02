/* eslint-env mocha */
import { expect } from 'chai';
import request from 'supertest';

import inititalizeApp from '../../..//config/app';
import Event from '../../../api/events/event.model';

import config from '../config';
import * as testUtils from '../utils';

describe('DELETE /api/events/{id}', () => {
  let dbEvent;
  let app;

  beforeEach((done) => {
    app = inititalizeApp(config);

    dbEvent = {
      title: 'Test Event',
      sport: 'football',
      difficulty: 'beginner',
      peopleNeeded: 5,
      date: new Date(),
      totalPrice: 12
    };

    Event.remove({}, () => {
      Event.create(dbEvent, (err, savedEvent) => {
        if (err) {
          return done(err);
        }

        dbEvent = savedEvent;

        return done();
      });
    });
  });

  afterEach((done) => {
    testUtils.dropDatabase(done);
  });

  it('should delete event when id is found', (done) => {
    request(app)
      .delete(`/api/events/${dbEvent._id}`)
      .expect(204)
      .then(() => {
        done();
      });
  });
});