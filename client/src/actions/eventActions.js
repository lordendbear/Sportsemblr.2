import * as types from './actionTypes';
import EventApi from '../api/eventApi';
import * as notificationActions from './notificationActions';

export function loadEventsSuccess(events) {
  return {
    type: types.LOAD_EVENTS_SUCCESS,
    events
  };
}

export function loadEventSuccess(event) {
  return {
    type: types.LOAD_EVENT_SUCCESS,
    event
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
      .then(response => {
        const events = response.data.events
          .map(e => {
            e['date'] = new Date(e['date']);
            return e;
          });

        dispatch(loadEventsSuccess(events));
      })
  };
}

export function saveEvent(event) {
  return (dispatch) => {
    return EventApi.saveEvent(event)
      .then(response => {
        const savedEvent = response.data;
        savedEvent.date = new Date(savedEvent.date);

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

export function getEventById(id) {
  return (dispatch) => {
    return EventApi.getById(id)
      .then(response => {
        dispatch(loadEventSuccess(response.data));
      })
      .catch(err => {
        console.log(err);
      })
  };
}