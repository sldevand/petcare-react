import { petTypes } from '../petTypes';

const initialState = {
    success: false,
    message: '',
    loading: false
};

const petUpdateReducer = (state = initialState, action) => {
    switch (action.type) {
        case petTypes.FETCH_PET_UPDATE_RESET:
            return {
                ...state,
                success: false,
                message: '',
                loading: false,
            }
        case petTypes.FETCH_PET_UPDATE_REQUEST:
            return {
                ...state,
                success: false,
                message: '',
                loading: true
            }
        case petTypes.FETCH_PET_UPDATE_SUCCESS:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.message,
                loading: false
            }
        case petTypes.FETCH_PET_UPDATE_FAILURE:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.errors,
                loading: false
            }
        default: return state;
    }
}

export default petUpdateReducer;