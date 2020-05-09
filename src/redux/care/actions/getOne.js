import { careTypes } from "../careTypes"
import { snackbarActions } from "../../snackbar/snackbarActions"
import { careService } from "../../../services/care.service"

const request = () => {
    return {
        type: careTypes.FETCH_CARE_GET_ONE_REQUEST
    }
}

const success = message => {
    return {
        type: careTypes.FETCH_CARE_GET_ONE_SUCCESS,
        payload: message
    }
}

const failure = error => {
    return {
        type: careTypes.FETCH_CARE_GET_ONE_FAILURE,
        payload: error
    }
}

const getOne = (name) => {
    return (dispatch) => {
        dispatch(request());
        careService.getOne(name)
            .then(response => {
                if (response.errors) {
                    let getFailure = failure(response);
                    dispatch(getFailure);
                    dispatch(snackbarActions.open(getFailure.payload.errors, 'error'));
                    return;
                }
         
                dispatch(success(response));
            })
            .catch((response) => {
                dispatch(failure(response));
            })
    }
}

export default getOne;