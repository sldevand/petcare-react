import { createStore, combineReducers, applyMiddleware } from 'redux';
import loginReducer from './login/loginReducer';
import logoutReducer from './logout/logoutReducer';
import userReducer from './user/userReducer';
import signupReducer from './signup/signupReducer';
import snackbarReducer from './snackbar/snackbarReducer';
import passwordReducer from './password/passwordReducer';
import petAddReducer from './pet/reducers/petAddReducer';
import petUpdateReducer from './pet/reducers/petUpdateReducer';
import petListReducer from './pet/reducers/petListReducer';
import petOneReducer from './pet/reducers/petOneReducer';
import careAddReducer from './care/reducers/addReducer';
import careListReducer from './care/reducers/listReducer';
import careOneReducer from './care/reducers/oneReducer';
import careUpdateReducer from './care/reducers/updateReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const allReducers = combineReducers({
    loginReducer,
    logoutReducer,
    userReducer,
    signupReducer,
    snackbarReducer,
    passwordReducer,
    petAddReducer,
    petUpdateReducer,
    petListReducer,
    petOneReducer,
    careAddReducer,
    careListReducer,
    careOneReducer,
    careUpdateReducer
});
const store = createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)));

export default store;