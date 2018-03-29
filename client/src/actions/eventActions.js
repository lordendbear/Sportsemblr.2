import * as types from './actionTypes';
import EventApi from '../api/eventApi';
import * as notificationActions from './notificationActions';

export function loadEventsSuccess(events) {
  return {
    type: types.LOAD_EVENTS_SUCCESS,
    events
  };
}

export function updateEventSuccess(event) {
  return {
    type: types.UPDATE_EVENT_SUCCESS,
    event
  };
}

export function createEventSuccess(event) {
  return {
    type: types.CREATE_EVENT_SUCCESS,
    event
  };
}

export function loadEvents() {
  return (dispatch) => {
    return EventApi.getAll()
      .then(events => {
        dispatch(loadEventsSuccess(events));
      })
  };
}

export function saveEvent(event) {
  return (dispatch) => {
    return EventApi.saveEvent(event)
      .then(savedEvent => {
        if (event.id) {
          dispatch(updateEventSuccess(savedEvent));
        } else {
          dispatch(createEventSuccess(savedEvent));
        }
        dispatch(notificationActions.success({ message: 'Saved successfulyy' }));
      })
      .catch(err => {
        dispatch(notificationActions.error({ message: 'Something went wrong' }));
      });
  };
}