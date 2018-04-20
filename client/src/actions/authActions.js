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

        dispatch(notificationActions.success({ message: 'Automatically logging you in... ' }));

        dispatch(login(user));
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
        const auth = {
          token: response.data.token,
          expires: response.data.expires,
          user: response.data.user
        };

        localStorage.setItem('auth', JSON.stringify(auth));
        dispatch({
          type: types.LOGIN
        })

        dispatch(notificationActions.success({ message: 'Log in successful!' }));
      })
      .catch(err => {
        dispatch({
          type: types.LOGIN_FAIL
        });

        dispatch(notificationActions.error({ message: 'Invalid credentials' }));
      });
  }
}

export function isLoggedIn() {
  return (dispatch) => authApi.isLoggedIn();
}