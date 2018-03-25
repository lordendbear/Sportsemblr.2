import * as types from './actionTypes';
import EventApi from '../api/eventApi';

export function loadEventsSuccess(events) {
    return {
        type: types.LOAD_EVENTS_SUCCESS,
        events
    };
}

export function loadEvents() {
    return (dispatch) => {
        return EventApi.getAll()
            .then(events => {
                console.log(events);
                dispatch(loadEventsSuccess(events));
            })
    };
}