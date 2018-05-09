/* eslint-env mocha */
import { expect } from 'chai';
import request from 'supertest';

import inititalizeApp from '../../../config/app';
import Event from '../../../api/events/event.model';

import config from '../config';
import * as testUtils from '../utils';

import { Types } from 'mongoose';

describe('PUT /api/events/{id}', () => {
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
      totalPrice: 12.1
    };

    updatedEvent = {
      title: 'Test Event v2',
      sport: 'basketball',
      difficulty: 'beginner',
      peopleNeeded: 3,
      date: new Date(),
      totalPrice: 5.00
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

  it('should update event data when request is ok', (done) => {
    request(app)
      .put(`/api/events/${dbEvent.id}`)
      .send(updatedEvent)
      .expect(200)
      .then((res) => {
        expect(res.body.title).to.equal(updatedEvent.title);
        expect(res.body.sport).to.equal(updatedEvent.sport);
        expect(res.body.difficulty).to.equal(updatedEvent.difficulty);
        expect(res.body.peopleNeeded).to.equal(updatedEvent.peopleNeeded);
        expect(res.body.totalPrice).to.equal(updatedEvent.totalPrice);
        expect(res.body.sport).to.equal(updatedEvent.sport);

        done();
      });
  });

  it('should return 404 when Event does not exist', (done) => {
    const id = new Types.ObjectId();
    request(app)
      .put(`/api/events/${id}`)
      .send(updatedEvent)
      .expect(404)
      .then(() => {
        done();
      });
  });
});