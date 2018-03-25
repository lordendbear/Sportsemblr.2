import * as types from './actionTypes';
import PlaceApi from '../api/placeApi';

export function savePlace(place) {
    return (dispatch) => {
        return PlaceApi.savePlace(place)
            .then(savedPlace => {
                dispatch(types.SAVE_PLACE_SUCCESS(savedPlace));
            });
    };
}