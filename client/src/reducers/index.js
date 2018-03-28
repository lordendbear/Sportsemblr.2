import { combineReducers } from 'redux';
import authReducer from './authReducer';
import placeReducer from './placeReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    events: eventReducer,
    place: placeReducer
});

export default rootReducer;