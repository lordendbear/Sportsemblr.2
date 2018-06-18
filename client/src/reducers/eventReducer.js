import * as types from '../actions/actionTypes';
import initialState from './initialState';

const handleLoadEventSuccess = (state, action) => {
    return {
        ...state,
        event: action.event
    };
};

const handleLoadEventsSuccess = (state, action) => {
    return {
        ...state,
        events: action.events
    }
};

const handleCreateEventSuccess = (state, action) => {
    return [
        ...state,
        Object.assign({}, action.event)
    ];
};

const handleUpdateEventSuccess = (state, action) => {
    return [
        ...state.filter(ev => ev.id !== action.event.id),
        Object.assign({}, action.event)
    ];
};

const handleLeaveReviewtSuccess = (state, action) => {
    const event = Object.assign({}, state.event);
    const reviews = Object.assign([], event.reviews);
    reviews.push(action.review);
    event.reviews = reviews;

    return {
        ...state,
        event
    };
};

export default function eventReducer(state = initialState.events, action) {
    switch (action.type) {
        case types.LOAD_EVENT_SUCCESS:
            return handleLoadEventSuccess(state, action);

        case types.LOAD_EVENTS_SUCCESS:
            return handleLoadEventsSuccess(state, action);

        case types.CREATE_EVENT_SUCCESS:
            return handleCreateEventSuccess(state, action);

        case types.UPDATE_EVENT_SUCCESS:
            return handleUpdateEventSuccess(state, action);

        case types.LEAVE_REVIEW_SUCCESS:
            return handleLeaveReviewtSuccess(state, action);

        default:
            return state;
    }
}