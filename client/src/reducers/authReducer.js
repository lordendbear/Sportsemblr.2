import * as types from '../actions/actionTypes';

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case types.REGISTER:
            return action.user;

        default:
            return state;
    }
}