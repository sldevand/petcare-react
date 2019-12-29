import { userService } from "../../services/user.service"
import { snackbarActions } from "../snackbar/snackbarActions";
import { signupTypes } from "./signupTypes";

const fetchSignupRequest = () => {
    return {
        type: signupTypes.FETCH_SIGNUP_REQUEST
    }
}

const fetchSignupSuccess = message => {
    return {
        type: signupTypes.FETCH_SIGNUP_SUCCESS,
        payload: message
    }
}

const fetchSignupFailure = error => {
    return {
        type: signupTypes.FETCH_SIGNUP_FAILURE,
        payload: error
    }
}

const signup = (email, firstName, lastName, password) => {
    return (dispatch) => {
        dispatch(fetchSignupRequest());
        userService.subscribe(email, firstName, lastName, password)
            .then(response => {
                if (response.errors) {
                    let signupFailure = fetchSignupFailure(response);
                    dispatch(signupFailure);
                    dispatch(snackbarActions.open(signupFailure.payload.errors, 'error'));
                    return;
                }
                dispatch(fetchSignupSuccess(response));
            })
            .catch((response) => {

                console.error(response)
                let signupFailure = fetchSignupFailure(response);
                dispatch(signupFailure);
                dispatch(snackbarActions.open(signupFailure.payload.errors, 'error'));
            })
    }
}

export const signupActions = {
    signup
}