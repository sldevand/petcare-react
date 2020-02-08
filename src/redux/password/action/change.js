import { passwordTypes } from './../passwordTypes'
import { passwordService } from './../../../services/password.service'
import { snackbarActions } from './../../snackbar/snackbarActions'

const fetchPasswordChange = () => {
    return {
        type: passwordTypes.FETCH_PASSWORD_CHANGE
    }
}

const fetchPasswordChangeSuccess = (message) => {
    return {
        type: passwordTypes.FETCH_PASSWORD_CHANGE_SUCCESS,
        payload: message
    }
}

const fetchPasswordChangeFailure = (error) => {
    return {
        type: passwordTypes.FETCH_PASSWORD_CHANGE_FAILURE,
        payload: error
    }
}

const change = (email) => {
    return (dispatch) => {
        dispatch(fetchPasswordChange());
        passwordService.passwordChange(email)
            .then(response => {

                if (response.errors) {
                    let passwordChangeFailure = fetchPasswordChangeFailure(response);
                    dispatch(passwordChangeFailure);
                    dispatch(snackbarActions.open(passwordChangeFailure.payload.errors, 'error'));
                    return;
                }
                let passwordChangeSuccess = fetchPasswordChangeSuccess(response);
                dispatch(passwordChangeSuccess);
                dispatch(snackbarActions.open(passwordChangeSuccess.payload.message, 'success'));                
            })
            .catch((response) => {
                dispatch(fetchPasswordChangeFailure(response));
            })
    }
}

export default change;
