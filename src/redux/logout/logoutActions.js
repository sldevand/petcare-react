import { logoutTypes } from "./logoutTypes"
import { snackbarActions } from "../snackbar/snackbarActions"
import { loginTypes } from "../login/loginTypes"

const logoutBuilder = message => {
    return {
        type: logoutTypes.LOGOUT_SUCCESS,
        message: message
    }
}

const isNotLoggedInBuilder = () => {
    return {
        type: loginTypes.IS_LOGGED_IN,
        loggedIn: false
    }
}

const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('apiKey');

        let message = 'You have logged out!'

        dispatch(isNotLoggedInBuilder());
        dispatch(logoutBuilder(message));     
        dispatch(snackbarActions.open(message, 'success'));   
    }
}

export const logoutActions = {
    logout
}