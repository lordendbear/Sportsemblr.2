import { combineReducers } from 'redux';
import authReducer from './authReducer';
import placeReducer from './placeReducer';
import eventReducer from './eventReducer';
import notificationReducer from './notificationReducer';
import sportReducer from './sportReducer';
import userReducer from './userReducer';
import messageReducer from './messageReducer';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventReducer,
  places: placeReducer,
  notification: notificationReducer,
  sports: sportReducer,
  user: userReducer,
  message: messageReducer,
  visibilityFilter
});

export default rootReducer;