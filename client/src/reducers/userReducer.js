import * as types from '../actions/actionTypes';

const handleLoadProfilesSuccess = (action) => {
  return { profile: action.user };
};

const handleLoadUsersSuccess = (action) => {
  return { users: [...action.users] };
};

const handleDeleteUserSuccess = (action, state) => {
  const users = state.users
    .filter(u => u._id !== action.user._id);

  return { users };
};

export default function userReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_PROFILE_SUCCESS:
      return handleLoadProfilesSuccess(action);

    case types.LOAD_USERS_SUCCESS:
      return handleLoadUsersSuccess(action);

    case types.DELETE_USER_SUCCESS:
      return handleDeleteUserSuccess(action, state);

    default:
      return state;
  }
}