import expect from 'expect';
import * as eventActions from './eventActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Event Actions', () => {
  describe('loadEventsSuccess', () => {
    it('should create a LOAD_EVENTS_SUCCESS action', () => {
      const events = [{ title: 'some awesome event' }];
      const expectedAction = {
        type: types.LOAD_EVENTS_SUCCESS,
        events
      };

      const action = eventActions.loadEventsSuccess(events);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('updateEventSuccess', () => {
    it('should create a UPDATE_EVENT_SUCCESS action', () => {
      const event = { title: 'some awesome event' };
      const expectedAction = {
        type: types.UPDATE_EVENT_SUCCESS,
        event
      };

      const action = eventActions.updateEventSuccess(event);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('createEventSuccess', () => {
    it('should create a CREATE_EVENT_SUCCESS action', () => {
      const event = { title: 'some awesome event' };
      const expectedAction = {
        type: types.CREATE_EVENT_SUCCESS,
        event
      };

      const action = eventActions.createEventSuccess(event);

      expect(action).toEqual(expectedAction);
    });
  });
});