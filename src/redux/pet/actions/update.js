import { petTypes } from "../petTypes"
import { snackbarActions } from "../../snackbar/snackbarActions"
import { petService } from "../../../services/pet.service"

const reset = () => {
    return {
        type: petTypes.FETCH_PET_UPDATE_RESET
    }
}

const request = () => {
    return {
        type: petTypes.FETCH_PET_UPDATE_REQUEST
    }
}

const success = message => {
    return {
        type: petTypes.FETCH_PET_UPDATE_SUCCESS,
        payload: message
    }
}

const failure = error => {
    return {
        type: petTypes.FETCH_PET_UPDATE_FAILURE,
        payload: error
    }
}

const update = (id, name, dob, specy, image) => {
    return (dispatch) => {
        dispatch(request());
        petService.update(id, name, dob, specy, image)
            .then(response => {
                if (response.errors) {
                    let petUpdateFailure = failure(response);
                    dispatch(petUpdateFailure);
                    dispatch(snackbarActions.open(petUpdateFailure.payload.errors, 'error'));
                    return;
                }
                
                let petUpdateSuccess = success(response);          
                dispatch(petUpdateSuccess);
                dispatch(snackbarActions.open(petUpdateSuccess.payload.message, 'success'));
                dispatch(reset());
            })
            .catch((response) => {
                dispatch(failure(response));
            })
    }
}

export default update;