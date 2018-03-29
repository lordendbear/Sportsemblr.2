import * as types from './actionTypes';
import EventApi from '../api/eventApi';

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
      });
  };
}