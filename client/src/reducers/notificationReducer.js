import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function placeReducer(state = initialState.notification, action) {
  switch (action.type) {
    case types.ERROR_NOTIFICATION:
      return Object.assign({}, action.notification)

    case types.SUCCESS_NOTIFICATION:
      return Object.assign({}, action.notification)

    default:
      return state;
  }
}