import * as types from './actionTypes';
import authApi from '../api/authApi';

export function register(user) {
    return (dispatch) => {
        return authApi.register(user)
            .then(response => {
                dispatch({
                    type: types.REGISTER_SUCCESS,
                    user: response
                })
            })
            .catch(err => {
                dispatch({
                    type: types.REGISTER_FAIL,
                    error: err
                })
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
            })
            .catch(err => {
                dispatch({
                    type: types.LOGIN_FAIL
                })
            });
    }
}