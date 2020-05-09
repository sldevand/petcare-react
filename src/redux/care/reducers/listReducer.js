import { careTypes } from '../careTypes';

const initialState = {
    success: false,
    message: '',
    loading: false,
    data: []
};

const careListReducer = (state = initialState, action) => {
    switch (action.type) {
        case careTypes.FETCH_CARE_GET_LIST_REQUEST:
            return {
                ...state,
                success: false,
                message: '',
                loading: true,
                data: []
            }
        case careTypes.FETCH_CARE_GET_LIST_SUCCESS:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.errors,
                loading: false,
                data: action.payload.data
            }
        case careTypes.FETCH_CARE_GET_LIST_FAILURE:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.errors,
                loading: false,
                data: []
            }
        default: return state;
    }
}

export default careListReducer;