import { createStore, combineReducers, applyMiddleware } from 'redux';
import loginReducer from './login/loginReducer';
import logoutReducer from './logout/logoutReducer';
import userReducer from './user/userReducer';
import signupReducer from './signup/signupReducer';
import snackbarReducer from './snackbar/snackbarReducer';
import passwordReducer from './password/passwordReducer';
import petReducer from './pet/petReducer';
import petListReducer from './pet/petListReducer';
import thunk from 'redux-thunk';


const allReducers = combineReducers({
    loginReducer,
    logoutReducer,
    userReducer,
    signupReducer,
    snackbarReducer,
    passwordReducer,
    petReducer,
    petListReducer
});
const store = createStore(allReducers,applyMiddleware(thunk));

export default store;