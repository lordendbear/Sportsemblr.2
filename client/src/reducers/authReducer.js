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
                isAuthenticated: true,
                user: action.user
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

        case types.LOGOUT:
            return {}

        default:
            return state;
    }
}