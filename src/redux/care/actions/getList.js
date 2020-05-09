import { careTypes } from "../careTypes"
import { snackbarActions } from "../../snackbar/snackbarActions"
import { careService } from "../../../services/care.service"

const request = () => {
    return {
        type: careTypes.FETCH_CARE_GET_LIST_REQUEST
    }
}

const success = message => {
    return {
        type: careTypes.FETCH_CARE_GET_LIST_SUCCESS,
        payload: message
    }
}

const failure = error => {
    return {
        type: careTypes.FETCH_CARE_GET_LIST_FAILURE,
        payload: error
    }
}

const getList = (name) => {
    return (dispatch) => {
        dispatch(request());
        careService.getList(name)
            .then(response => {
                if (response.errors) {
                    let careGetListFailure = failure(response);
                    dispatch(careGetListFailure);
                    dispatch(snackbarActions.open(careGetListFailure.payload.errors, 'error'));
                    return;
                }
                
                let careGetListSuccess = success(response);          
                dispatch(careGetListSuccess);
            })
            .catch((response) => {
                dispatch(failure(response));
            })
    }
}

export default getList;