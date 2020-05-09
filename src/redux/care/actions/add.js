import { careTypes } from "../careTypes"
import { snackbarActions } from "./../../snackbar/snackbarActions"
import { careService } from "./../../../services/care.service"

const reset = () => {
    return {
        type: careTypes.FETCH_CARE_ADD_RESET
    }
}

const request = () => {
    return {
        type: careTypes.FETCH_CARE_ADD_REQUEST
    }
}

const success = message => {
    return {
        type: careTypes.FETCH_CARE_ADD_SUCCESS,
        payload: message
    }
}

const failure = error => {
    return {
        type: careTypes.FETCH_CARE_ADD_FAILURE,
        payload: error
    }
}

const add = (name, dob, specy, image) => {
    return (dispatch) => {
        dispatch(request());
        careService.add(name, dob, specy, image)
            .then(response => {
                if (response.errors) {
                    let careAddFailure = failure(response);
                    dispatch(careAddFailure);
                    dispatch(snackbarActions.open(careAddFailure.payload.errors, 'error'));
                    return;
                }
                
                let careAddSuccess = success(response);          
                dispatch(careAddSuccess);
                dispatch(snackbarActions.open(careAddSuccess.payload.message, 'success'));
                dispatch(reset());
            })
            .catch((response) => {
                dispatch(failure(response));
            })
    }
}

export default add;