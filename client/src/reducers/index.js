import { combineReducers } from 'redux';
import authReducer from './authReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    event: eventReducer
});

export default rootReducer;