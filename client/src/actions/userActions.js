import * as types from './actionTypes';
import UserApi from '../api/userApi';

export function loadProfileSuccess(user) {
  return {
    type: types.LOAD_PROFILE_SUCCESS,
    user
  };
}

export function loadProfile(id) {
  return (dispatch) => {
    return UserApi.getUserProfile(id)
      .then(response => {
        dispatch(loadProfileSuccess(response.data));
      })
      .catch(err => {
        console.log(err);
      })
  };
}