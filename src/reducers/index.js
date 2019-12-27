import loggedReducer from './islogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isLogged : loggedReducer
});

export default allReducers;