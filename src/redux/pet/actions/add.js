import { petTypes } from "./../petTypes"
import { snackbarActions } from "./../../snackbar/snackbarActions"
import { petService } from "./../../../services/pet.service"

const reset = () => {
    return {
        type: petTypes.FETCH_PET_ADD_RESET
    }
}

const request = () => {
    return {
        type: petTypes.FETCH_PET_ADD_REQUEST
    }
}

const success = message => {
    return {
        type: petTypes.FETCH_PET_ADD_SUCCESS,
        payload: message
    }
}

const failure = error => {
    return {
        type: petTypes.FETCH_PET_ADD_FAILURE,
        payload: error
    }
}

const add = (name, dob, specy, image) => {
    return (dispatch) => {
        dispatch(request());
        petService.add(name, dob, specy, image)
            .then(response => {
                if (response.errors) {
                    let petAddFailure = failure(response);
                    dispatch(petAddFailure);
                    dispatch(snackbarActions.open(petAddFailure.payload.errors, 'error'));
                    return;
                }
                
                let petAddSuccess = success(response);          
                dispatch(petAddSuccess);
                dispatch(snackbarActions.open(petAddSuccess.payload.message, 'success'));
                dispatch(reset());
            })
            .catch((response) => {
                dispatch(failure(response));
            })
    }
}

export default add;