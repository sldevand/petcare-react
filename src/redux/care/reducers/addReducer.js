import { careTypes } from '../careTypes';

const initialState = {
    success: false,
    message: '',
    loading: false
};

const careAddReducer = (state = initialState, action) => {
    switch (action.type) {
        case careTypes.FETCH_CARE_ADD_RESET:
            return {
                ...state,
                success: false,
                message: '',
                loading: false,
            }
        case careTypes.FETCH_CARE_ADD_REQUEST:
            return {
                ...state,
                success: false,
                message: '',
                loading: true
            }
        case careTypes.FETCH_CARE_ADD_SUCCESS:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.message,
                loading: false
            }
        case careTypes.FETCH_CARE_ADD_FAILURE:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.errors,
                loading: false
            }
        default: return state;
    }
}

export default careAddReducer;