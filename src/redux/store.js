import { createStore, combineReducers } from 'redux';
import userReducer from './user/userReducer';

const allReducers = combineReducers({
    userReducer : userReducer
});
const store = createStore(allReducers);

export default store;