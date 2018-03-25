import { combineReducers } from 'redux';
import authReducer from './authReducer';
import placeReducer from './placeReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    place: placeReducer
});

export default rootReducer;