import * as types from './actionTypes';

export function success(notification) {
  return {
    type: types.SUCCESS_NOTIFICATION,
    notification: { success: notification }
  };
}

export function error(error) {
  return {
    type: types.ERROR_NOTIFICATION,
    notification: { error }
  };
}