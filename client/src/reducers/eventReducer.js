import * as types from '../actions/actionTypes';

const handleLoadEventsSuccess = (action) => {
    return [
        ...action.events
    ];
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

export default function eventReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_EVENTS_SUCCESS:
            return handleLoadEventsSuccess(action);

        case types.CREATE_EVENT_SUCCESS:
            return handleCreateEventSuccess(state, action);

        case types.UPDATE_EVENT_SUCCESS:
            return handleUpdateEventSuccess(state, action);

        default:
            return state;
    }
}