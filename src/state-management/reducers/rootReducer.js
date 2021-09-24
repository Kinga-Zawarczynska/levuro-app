import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { errorReducer } from './errorReducer';
import { flowReducer } from './flowReducer';

const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer,
    flow: flowReducer
});

export default rootReducer;