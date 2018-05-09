/* eslint-env mocha */
import { expect } from 'chai';
import request from 'supertest';

import inititalizeApp from '../../../config/app';
import Event from '../../../api/events/event.model';

import config from '../config';
import * as testUtils from '../utils';

import { Types } from 'mongoose';

describe('GET /api/events/{id}', () => {
  let dbEvent;
  let updatedEvent;
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

  it('should return event data when request is ok', (done) => {
    const id = dbEvent._id;

    request(app)
      .get(`/api/events/${id}`)
      .expect(200)
      .then((res) => {
        expect(res.body.title).to.equal(dbEvent.title);
        expect(res.body.sport).to.equal(dbEvent.sport);
        expect(res.body.difficulty).to.equal(dbEvent.difficulty);
        expect(res.body.peopleNeeded).to.equal(dbEvent.peopleNeeded);
        expect(res.body.totalPrice).to.equal(dbEvent.totalPrice);

        done();
      });
  });

  it('should return 404 when event does not exist', (done) => {
    const id = new Types.ObjectId();

    request(app)
      .get(`/api/events/${id}`)
      .expect(404)
      .then(() => {
        done();
      });
  });
});