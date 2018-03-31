import * as types from './actionTypes';
import SportApi from '../api/sportApi';
import * as notificationActions from './notificationActions';

export function loadSportsSuccess(sports) {
    return {
        type: types.LOAD_SPORTS_SUCCESS,
        sports
    };
}

export function createSportSuccess(sport) {
    return {
        type: types.CREATE_SPORT_SUCCESS,
        sport
    };
}

export function updateSportSuccess(sport) {
    return {
        type: types.UPDATE_SPORT_SUCCESS,
        sport
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

export function saveSport(sport) {
    return (dispatch) => {
        return SportApi.saveSport(sport)
            .then(savedSport => {
                if (sport.id) {
                    dispatch(updateSportSuccess(savedSport));
                } else {
                    dispatch(createSportSuccess(savedSport));
                }

                dispatch(notificationActions.success({ message: 'Saved' }));
            })
            .catch(err => {
                dispatch(notificationActions.error({ message: 'Something went wrong...' }));
            });
    };
}