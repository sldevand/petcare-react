import { petTypes } from "../petTypes"
import { snackbarActions } from "../../snackbar/snackbarActions"
import { petService } from "../../../services/pet.service"

const request = () => {
    return {
        type: petTypes.FETCH_PET_GET_LIST_REQUEST
    }
}

const success = message => {
    return {
        type: petTypes.FETCH_PET_GET_LIST_SUCCESS,
        payload: message
    }
}

const failure = error => {
    return {
        type: petTypes.FETCH_PET_GET_LIST_FAILURE,
        payload: error
    }
}

const getList = () => {
    return (dispatch) => {
        dispatch(request());
        petService.getList()
            .then(response => {
                if (response.errors) {
                    let petGetListFailure = failure(response);
                    dispatch(petGetListFailure);
                    dispatch(snackbarActions.open(petGetListFailure.payload.errors, 'error'));
                    return;
                }
                
                let petGetListSuccess = success(response);          
                dispatch(petGetListSuccess);
            })
            .catch((response) => {
                dispatch(failure(response));
            })
    }
}

export default getList;