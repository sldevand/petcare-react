import { careTypes } from '../careTypes';

const initialState = {
    success: false,
    message: '',
    loading: false,
    data: [],
    image: ''
};

const careOneReducer = (state = initialState, action) => {
    switch (action.type) {
        case careTypes.FETCH_CARE_GET_ONE_REQUEST:
            return {
                ...state,
                success: false,
                message: '',
                loading: true,
                data: [],
                image:''
            }
        case careTypes.FETCH_CARE_GET_ONE_SUCCESS:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.errors,
                loading: false,
                data: action.payload.data,
                image:action.payload.data.image.image
            }
        case careTypes.FETCH_CARE_GET_ONE_FAILURE:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.errors,
                loading: false,
                data: [],
                image:''
            }
        default: return state;
    }
}

export default careOneReducer;