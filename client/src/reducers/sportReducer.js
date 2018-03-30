import * as types from '../actions/actionTypes';
import initialState from './initialState';

const handleLoadSportsSuccess = (action) => {
  return [
    ...action.sports
  ];
};

export default function sportReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_SPORTS_SUCCESS:
      return handleLoadSportsSuccess(action);

    default:
      return state;
  }
}