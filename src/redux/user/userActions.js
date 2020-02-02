import { userService } from "../../services/user.service"
import { userTypes } from "./userTypes"
import { snackbarActions } from "../snackbar/snackbarActions"

const fetchUserRequest = () => {
    return {
        type: userTypes.FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = message => {
    return {
        type: userTypes.FETCH_USER_SUCCESS,
        payload: message
    }
}

const fetchUserFailure = error => {
    return {
        type: userTypes.FETCH_USER_FAILURE,
        payload: error
    }
}

const fetchUserActivation = message => {
    return {
        type: userTypes.FETCH_USER_ACTIVATION_SUCCESS,
        payload: message
    }
}

const fetchUserActivationFailure = error => {
    return {
        type: userTypes.FETCH_USER_ACTIVATION_FAILURE,
        payload: error
    }
}

const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest());

        userService.fetchUser()
            .then(response => {

                if (response.errors) {
                    let userFailure = fetchUserFailure(response);
                    dispatch(userFailure);
                    dispatch(snackbarActions.open(userFailure.payload.errors, 'error'));
                    return;
                }
                dispatch(fetchUserSuccess(response));
            })
            .catch((response) => {
                dispatch(fetchUserFailure(response));
            })
    }
}

const activateUser = (id, activationcode) => {
    return (dispatch) => {
        dispatch(fetchUserRequest());

        userService.fetchUserActivation(id, activationcode)
            .then(response => {
                if (response.errors) {
                    let userActivationFailure = fetchUserActivationFailure(response);
                    dispatch(userActivationFailure);
                    dispatch(snackbarActions.open(userActivationFailure.payload.errors, 'error'));
                    return;
                }
                dispatch(fetchUserActivation(response));
            })
            .catch((response) => {
                dispatch(fetchUserActivationFailure(response));
            })
    }
}

export const userActions = {
    fetchUser,
    activateUser
}