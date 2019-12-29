import { userService } from "../../services/user.service"
import { loginTypes } from "./loginTypes"
import { snackbarActions } from "../snackbar/snackbarActions"

const fetchLoginRequest = () => {
    return {
        type: loginTypes.FETCH_LOGIN_REQUEST
    }
}

const fetchLoginSuccess = message => {
    return {
        type: loginTypes.FETCH_LOGIN_SUCCESS,
        payload: message
    }
}

const fetchLoginFailure = error => {
    return {
        type: loginTypes.FETCH_LOGIN_FAILURE,
        payload: error
    }
}

const login = (email, password) => {
    return (dispatch) => {
        dispatch(fetchLoginRequest());
        userService.login(email, password)
            .then(response => {
                if (response.errors) {
                    let loginFailure = fetchLoginFailure(response);
                    dispatch(loginFailure);
                    dispatch(snackbarActions.open(loginFailure.payload.errors, 'error'));
                    return;
                }

                let loginSuccess = fetchLoginSuccess(response);
                dispatch(loginSuccess);
                dispatch(snackbarActions.open(loginSuccess.payload.message, 'success'));
            })
            .catch((response) => {
                dispatch(fetchLoginFailure(response));
            })
    }
}

export const loginActions = {
    login
}