import * as types from './actionTypes';
import PlaceApi from '../api/placeApi';
import * as notificationActions from './notificationActions';

export function savePlaceSuccess(place) {
  return {
    type: types.SAVE_PLACE_SUCCESS,
    place
  };
}

export function updatePlaceSuccess(place) {
  return {
    type: types.UPDATE_PLACE_SUCCESS,
    place
  };
}

export function savePlace(place) {
  return (dispatch) => {
    return PlaceApi.savePlace(place)
      .then(savedPlace => {
        if (place.id) {
          dispatch(updatePlaceSuccess(savedPlace));
        } else {
          dispatch(savePlaceSuccess(savedPlace));
        }

        dispatch(notificationActions.success({ message: 'Place saved.' }));
      })
      .catch(err => {
        dispatch(notificationActions.error({ message: 'Something went wrong...' }));
      });
  };
}