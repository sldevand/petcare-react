import { careTypes } from '../careTypes';

const initialState = {
    success: false,
    message: '',
    loading: false
};

const careUpdateReducer = (state = initialState, action) => {
    switch (action.type) {
        case careTypes.FETCH_CARE_UPDATE_RESET:
            return {
                ...state,
                success: false,
                message: '',
                loading: false,
            }
        case careTypes.FETCH_CARE_UPDATE_REQUEST:
            return {
                ...state,
                success: false,
                message: '',
                loading: true
            }
        case careTypes.FETCH_CARE_UPDATE_SUCCESS:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.message,
                loading: false
            }
        case careTypes.FETCH_CARE_UPDATE_FAILURE:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.errors,
                loading: false
            }
        default: return state;
    }
}

export default careUpdateReducer;