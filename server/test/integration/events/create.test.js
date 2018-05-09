/* eslint-env mocha */
import { expect } from 'chai';
import request from 'supertest';

import inititalizeApp from '../../../config/app';
import Event from '../../../api/events/event.model';

import config from '../config';
import * as testUtils from '../utils';

describe('POST /api/events', () => {
  let dbEvent;
  let event;
  let app;

  beforeEach((done) => {
    app = inititalizeApp(config);

    dbEvent = {
      title: 'Db Event',
      sport: 'football',
      difficulty: 'beginner',
      peopleNeeded: 5,
      date: new Date(),
      totalPrice: 12
    };

    event = {
      title: 'Test Event',
      sport: 'basketball',
      difficulty: 'beginner',
      peopleNeeded: 3,
      date: new Date(),
      totalPrice: 5
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

  it('should create a new event when request is ok', (done) => {
    request(app)
      .post('/api/Events')
      .send(event)
      .expect(200)
      .then((res) => {
        expect(res.body.name).to.equal(event.name);

        done();
      });
  });

  it('should return 400 when no Event', (done) => {
    request(app)
      .post('/api/Events')
      .send()
      .expect(400)
      .then(() => {
        done();
      });
  });

  it('should return 400 when no name', (done) => {
    request(app)
      .post('/api/Events')
      .send({})
      .expect(400)
      .then(() => {
        done();
      });
  });
});