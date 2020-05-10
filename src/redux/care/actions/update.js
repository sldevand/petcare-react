import { careTypes } from "../careTypes"
import { snackbarActions } from "../../snackbar/snackbarActions"
import { careService } from "../../../services/care.service"

const reset = () => {
    return {
        type: careTypes.FETCH_CARE_UPDATE_RESET
    }
}

const request = () => {
    return {
        type: careTypes.FETCH_CARE_UPDATE_REQUEST
    }
}

const success = message => {
    return {
        type: careTypes.FETCH_CARE_UPDATE_SUCCESS,
        payload: message
    }
}

const failure = error => {
    return {
        type: careTypes.FETCH_CARE_UPDATE_FAILURE,
        payload: error
    }
}

const update = (id, name, title, appointmentDate, content) => {
    return (dispatch) => {
        dispatch(request());
        careService.update(id, name, title, appointmentDate, content)
            .then(response => {
                if (response.errors) {
                    let careUpdateFailure = failure(response);
                    dispatch(careUpdateFailure);
                    dispatch(snackbarActions.open(careUpdateFailure.payload.errors, 'error'));
                    return;
                }
                
                let careUpdateSuccess = success(response);          
                dispatch(careUpdateSuccess);
                dispatch(snackbarActions.open(careUpdateSuccess.payload.message, 'success'));
                dispatch(reset());
            })
            .catch((response) => {
                dispatch(failure(response));
            })
    }
}

export default update;