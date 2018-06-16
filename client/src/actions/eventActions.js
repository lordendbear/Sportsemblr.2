import * as types from './actionTypes';
import EventApi from '../api/eventApi';
import RequestApi from '../api/requestApi';
import * as notificationActions from './notificationActions';

export function setVisibilityFilter(filter, args) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
    args
  };
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_INACTIVE: 'SHOW_INACTIVE',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  MIN_PRICE_FILTER: 'MIN_PRICE_FILTER',
  MAX_PRICE_FILTER: 'MAX_PRICE_FILTER',
  SPORT_TYPE_FILTER: 'SPORT_TYPE_FILTER',
  SHOW_FREE_EVENTS: 'SHOW_FREE_EVENTS'
}

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

export function joinEvent(event, user) {
  return (dispatch) => {
    return EventApi.joinEvent(event, user)
      .then(response => {
        dispatch({
          type: types.JOIN_REQUEST_SUCCESS
        })

        dispatch(notificationActions.success({ message: 'Request sent' }));
      })
      .catch(err => {
        dispatch({
          type: types.LOGIN_FAIL
        });

        dispatch(notificationActions.error({ message: 'Something went wrong' }));
      });
  }
}

export function leaveReview(review, event) {
  return (dispatch) => {
    return EventApi.leaveReview(review, event._id)
      .then(response => {
        dispatch({
          type: types.LEAVE_REVIEW_SUCCESS
        })

        dispatch(notificationActions.success({ message: 'Review sent' }));
      })
      .catch(err => {
        dispatch(notificationActions.error({ message: 'Something went wrong' }));
      });
  }
}

export function respondToRequest(event, request, accept) {
  return (dispatch) => {
    return RequestApi.respondToRequest(event._id, request._id, accept)
      .then(response => {
        dispatch({
          type: types.RESPOND_TO_REQUEST_SUCCESS
        })

        dispatch(notificationActions.success({ message: accept ? 'Request accepted' : 'Request declined' }));
      });
  }
}

export function deleteEvent(event) {
  return (dispatch) => {
    return EventApi.deleteEvent(event._id)
      .then(() => {
        dispatch({
          type: types.DELETE_EVENT_SUCCESS
        })

        dispatch(notificationActions.success({ message: 'Event deleted' }));
      })
  }
}