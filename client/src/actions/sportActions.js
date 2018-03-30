import * as types from './actionTypes';
import * as notificationActions from './notificationActions';
import SportApi from '../api/sportApi';

export function loadSportsSuccess(sports) {
    return {
        type: types.LOAD_SPORTS_SUCCESS,
        sports
    };
}

export function loadSports() {
    return (dispatch) => {
        return SportApi.getAll()
            .then(sports => {
                dispatch(loadSportsSuccess(sports));
            });
    };
}