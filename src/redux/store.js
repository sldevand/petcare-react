import { createStore, combineReducers, applyMiddleware } from 'redux';
import loginReducer from './login/loginReducer';
import userReducer from './user/userReducer';
import signupReducer from './signup/signupReducer';
import snackbarReducer from './snackbar/snackbarReducer';
import passwordReducer from './password/passwordReducer';


import thunk from 'redux-thunk';


const allReducers = combineReducers({
    loginReducer,
    userReducer,
    signupReducer,
    snackbarReducer,
    passwordReducer
});
const store = createStore(allReducers,applyMiddleware(thunk));

export default store;