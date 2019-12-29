import { createStore, combineReducers, applyMiddleware } from 'redux';
import loginReducer from './login/loginReducer';
import signupReducer from './signup/signupReducer';
import snackbarReducer from './snackbar/snackbarReducer';
import thunk from 'redux-thunk';


const allReducers = combineReducers({
    loginReducer,
    signupReducer,
    snackbarReducer
});
const store = createStore(allReducers,applyMiddleware(thunk));

export default store;