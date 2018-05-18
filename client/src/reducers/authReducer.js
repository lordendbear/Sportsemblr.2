import * as types from '../actions/actionTypes';

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                user: action.user
            }
        case types.REGISTER_FAIL:
            return {
                ...state,
                registerFailure: true
            }
        case types.LOGIN:
            return {
                ...state,
                isAuthenticated: true
            }

        case types.LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }

        case types.GET_LOGGED_USER:
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}