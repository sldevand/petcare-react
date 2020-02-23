import { petTypes } from "./petTypes"
import { snackbarActions } from "../snackbar/snackbarActions"
import { petService } from "../../services/pet.service"

const fetchPetAddRequest = () => {
    return {
        type: petTypes.FETCH_PET_ADD_REQUEST
    }
}

const fetchPetAddSuccess = message => {
    return {
        type: petTypes.FETCH_PET_ADD_SUCCESS,
        payload: message
    }
}

const fetchPetAddFailure = error => {
    return {
        type: petTypes.FETCH_PET_ADD_FAILURE,
        payload: error
    }
}

const add = (name, dob, specy, image) => {
    return (dispatch) => {
        dispatch(fetchPetAddRequest());
        petService.add(name, dob, specy, image)
            .then(response => {
                if (response.errors) {
                    let petAddFailure = fetchPetAddFailure(response);
                    dispatch(petAddFailure);
                    dispatch(snackbarActions.open(petAddFailure.payload.errors, 'error'));
                    return;
                }
                
                let petAddSuccess = fetchPetAddSuccess(response);          
                dispatch(petAddSuccess);
                dispatch(snackbarActions.open(petAddSuccess.payload.message, 'success'));
            })
            .catch((response) => {
                dispatch(fetchPetAddFailure(response));
            })
    }
}

export const petActions = {
    add
}