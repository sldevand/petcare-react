import { passwordTypes } from './../passwordTypes'
import { passwordService } from './../../../services/password.service'
import { snackbarActions } from './../../snackbar/snackbarActions'


const fetchPasswordReset = () => {
    return {
        type: passwordTypes.FETCH_PASSWORD_RESET
    }
}

const fetchPasswordResetSuccess = (message) => {
    return {
        type: passwordTypes.FETCH_PASSWORD_RESET_SUCCESS,
        payload: message
    }
}

const fetchPasswordResetFailure = (error) => {
    return {
        type: passwordTypes.FETCH_PASSWORD_RESET_FAILURE,
        payload: error
    }
}

const reset = (email) => {
    return (dispatch) => {
        dispatch(fetchPasswordReset());
        passwordService.passwordReset(email)
            .then(response => {

                if (response.errors) {
                    let passwordResetFailure = fetchPasswordResetFailure(response);
                    dispatch(passwordResetFailure);
                    dispatch(snackbarActions.open(passwordResetFailure.payload.errors, 'error'));
                    return;
                }
                let passwordResetSuccess = fetchPasswordResetSuccess(response);
                dispatch(passwordResetSuccess);
                dispatch(snackbarActions.open(passwordResetSuccess.payload.message, 'success'));                
            })
            .catch((response) => {
                dispatch(fetchPasswordResetFailure(response));
            })
    }
}

export default reset;