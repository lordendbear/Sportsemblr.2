import * as types from './actionTypes';
import UserApi from '../api/userApi';
import * as notificationActions from './notificationActions';

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

export function updateProfile(user) {
  return (dispatch) => {
    return UserApi.updateProfile(user._id, user)
      .then(response => {
        dispatch(notificationActions.success({ message: 'Profile updated' }));
      })
      .catch(err => {
        console.log(err);
      })
  };
}

export function loadUsers() {
  return (dispatch) => {
    return UserApi.getAll()
      .then(response => {
        dispatch({
          type: types.LOAD_USERS_SUCCESS,
          users: response.data
        });
      })
  };
}

export function deleteUser(user) {
  return (dispatch) => {
    return UserApi.deleteUser(user._id)
      .then(() => {
        dispatch(notificationActions.success({ message: 'User deleted' }));
        dispatch({
          type: types.DELETE_USER_SUCCESS,
          user
        });
      });
  };
}

export function removeAdmin() {
  return (dispatch) => {

  };
}

export function makeAdmin() {
  return (dispatch) => {

  };
}
