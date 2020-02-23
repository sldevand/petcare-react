import { petTypes } from './petTypes';

const initialState = {
    success: false,
    message: '',
    loading: false,

};

const petReducer = (state = initialState, action) => {
    switch (action.type) {
        case petTypes.FETCH_PET_ADD_REQUEST:
            return {
                ...state,
                success: false,
                message: '',
                loading: true
            }
        case petTypes.FETCH_PET_ADD_SUCCESS:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.message,
                loading: false
            }
        case petTypes.FETCH_PET_ADD_FAILURE:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.errors,
                loading: false
            }
        default: return state;
    }
}

export default petReducer;