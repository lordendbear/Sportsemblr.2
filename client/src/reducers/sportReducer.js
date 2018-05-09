import * as types from '../actions/actionTypes';

const handleLoadSportsSuccess = (action) => {
  return [
    ...action.sports
  ];
};

const handleSaveSportSuccess = (sports, savedSport) => {
  return [
    ...sports.filter(sport => sport.id !== savedSport.id),
    Object.assign({}, savedSport)
  ]
}

const handleDeleteSportSuccess = (sports, id) => {
  return [
    ...sports.filter(sport => sport.id !== id)
  ]
}

export default function sportReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_SPORTS_SUCCESS:
      return handleLoadSportsSuccess(action);

    case types.UPDATE_SPORT_SUCCESS:
      return handleSaveSportSuccess(state, action.sport);

    case types.CREATE_SPORT_SUCCESS:
      return handleSaveSportSuccess(state, action.sport);

    case types.DELETE_SPORT_SUCCESS:
      return handleDeleteSportSuccess(state, action.id);

    default:
      return state;
  }
}