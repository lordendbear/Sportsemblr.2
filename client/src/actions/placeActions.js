import * as types from './actionTypes';
import PlaceApi from '../api/placeApi';
import * as notificationActions from './notificationActions';

export function loadPlacesSuccess(places) {
  return {
    type: types.LOAD_PLACES_SUCCESS,
    places
  };
}

export function createPlaceSuccess(place) {
  return {
    type: types.CREATE_PLACE_SUCCESS,
    place
  };
}

export function updatePlaceSuccess(place) {
  return {
    type: types.UPDATE_PLACE_SUCCESS,
    place
  };
}

export function loadPlaces() {
  return (dispatch) => {
    return PlaceApi.getAll()
      .then(places => {
        dispatch(loadPlacesSuccess(places));
      })
  };
}

export function savePlace(place) {
  return (dispatch) => {
    return PlaceApi.savePlace(place)
      .then(savedPlace => {
        if (place.id) {
          dispatch(updatePlaceSuccess(savedPlace));
        } else {
          dispatch(createPlaceSuccess(savedPlace));
        }

        dispatch(notificationActions.success({ message: 'Place saved.' }));
      })
      .catch(err => {
        dispatch(notificationActions.error({ message: 'Something went wrong...' }));
      });
  };
}