import * as types from './actionTypes';
import authApi from '../api/authApi';
import * as notificationActions from './notificationActions';

export function register(user) {
  return (dispatch) => {
    return authApi.register(user)
      .then(response => {
        dispatch({
          type: types.REGISTER_SUCCESS,
          user: response
        });

        dispatch(notificationActions.success({ message: 'Registered successfully' }));
      })
      .catch(err => {
        dispatch({
          type: types.REGISTER_FAIL,
          error: err
        });

        dispatch(notificationActions.error({ message: 'Something went wrong...' }));
      });
  }
}

export function login(user) {
  return (dispatch) => {
    return authApi.login(user)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        dispatch({
          type: types.LOGIN
        })

        dispatch(notificationActions.success({ message: 'Success' }));
      })
      .catch(err => {
        dispatch({
          type: types.LOGIN_FAIL
        });

        dispatch(notificationActions.error({ message: 'Invalid credentials' }));
      });
  }
}