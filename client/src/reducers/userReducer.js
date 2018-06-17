import * as types from '../actions/actionTypes';

const handleLoadProfilesSuccess = (action) => {
  return { profile: action.user };
};

const handleLoadUsersSuccess = (action) => {
  return { users: [...action.users] };
};

export default function userReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_PROFILE_SUCCESS:
      return handleLoadProfilesSuccess(action);

    case types.LOAD_USERS_SUCCESS:
      return handleLoadUsersSuccess(action);

    default:
      return state;
  }
}