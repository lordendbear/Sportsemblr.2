import * as types from './actionTypes';
import PlaceApi from '../api/placeApi';

export function savePlaceSuccess(place) {
    return {
        type: types.SAVE_PLACE_SUCCESS,
        place
    };
}

export function savePlace(place) {
    return (dispatch) => {
        return PlaceApi.savePlace(place)
            .then(savedPlace => {
                dispatch(savePlaceSuccess(savedPlace));
            });
    };
}