import { petTypes } from "../petTypes"
import { snackbarActions } from "../../snackbar/snackbarActions"
import { petService } from "../../../services/pet.service"

const request = () => {
    return {
        type: petTypes.FETCH_PET_GET_IMAGE_REQUEST
    }
}

const success = message => {
    return {
        type: petTypes.FETCH_PET_GET_IMAGE_SUCCESS,
        payload: message
    }
}

const failure = error => {
    return {
        type: petTypes.FETCH_PET_GET_IMAGE_FAILURE,
        payload: error
    }
}

const getPetImage = (id) => {
    return (dispatch) => {
        dispatch(request());
        petService.getPetImage(id)
            .then(response => {
                if (response.errors) {
                    let getPetImageFailure = failure(response);
                    dispatch(getPetImageFailure);
                    dispatch(snackbarActions.open(getPetImageFailure.payload.errors, 'error'));
                    return;
                }
                
                let getPetImageSuccess = success(response);          
                dispatch(getPetImageSuccess);
            })
            .catch((response) => {
                dispatch(failure(response));
            })
    }
}

export default getPetImage;