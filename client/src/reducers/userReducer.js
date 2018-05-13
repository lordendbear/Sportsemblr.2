import * as types from '../actions/actionTypes';

const handleLoadProfilesSuccess = (action) => {
  return { profile: action.user };
};

export default function userReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_PROFILE_SUCCESS:
      return handleLoadProfilesSuccess(action);

    default:
      return state;
  }
}