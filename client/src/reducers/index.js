import { combineReducers } from 'redux';
import authReducer from './authReducer';
import placeReducer from './placeReducer';
import eventReducer from './eventReducer';
import notificationReducer from './notificationReducer';
import sportReducer from './sportReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventReducer,
  places: placeReducer,
  notification: notificationReducer,
  sports: sportReducer
});

export default rootReducer;