import * as types from '../actions/actionTypes';
import initialState from './initialState';

const handleCreatePlaceSuccess = (state, action) => {
    return [
        ...state,
        Object.assign({}, action.place)
    ];
};

const handleUpdatePlaceSuccess = (state, action) => {
    return [
        ...state.filter(p => p.id !== action.place.id),
        Object.assign({}, action.place)
    ];
};

export default function placeReducer(state = initialState.places, action) {
    switch (action.type) {
        case types.CREATE_PLACE_SUCCESS:
            return handleCreatePlaceSuccess(state, action);

        case types.UPDATE_PLACE_SUCCESS:
            return handleUpdatePlaceSuccess(state, action);

        default:
            return state;
    }
}