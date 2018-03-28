import * as types from '../actions/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function placeReducer(state = initialState.places, action) {
    switch (action.type) {
        case types.SAVE_PLACE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.place)
            ];

        default:
            return state;
    }
}