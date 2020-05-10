import { petTypes } from "../petTypes"
import { snackbarActions } from "../../snackbar/snackbarActions"
import { petService } from "../../../services/pet.service"

const request = () => {
    return {
        type: petTypes.FETCH_PET_GET_ONE_REQUEST
    }
}

const success = message => {
    return {
        type: petTypes.FETCH_PET_GET_ONE_SUCCESS,
        payload: message
    }
}

const failure = error => {
    return {
        type: petTypes.FETCH_PET_GET_ONE_FAILURE,
        payload: error
    }
}

const getOne = (name) => {
    return (dispatch) => {
        dispatch(request());
        petService.getOne(name)
            .then(response => {
                if (response.errors) {
                    let getFailure = failure(response);
                    dispatch(getFailure);
                    dispatch(snackbarActions.open(getFailure.payload.errors, 'error'));
                    return;
                }
                let getSuccess = failure(response);
                dispatch(success(response));
                dispatch(snackbarActions.open(getSuccess.payload.message, 'success'));
            })
            .catch((response) => {
                let getFailure = failure(response);
                dispatch(getFailure);
                dispatch(snackbarActions.open(response.message, 'error'));
            })
    }
}

export default getOne;