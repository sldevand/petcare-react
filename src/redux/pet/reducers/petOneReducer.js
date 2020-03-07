import { petTypes } from '../petTypes';

const initialState = {
    success: false,
    message: '',
    loading: false,
    data: [],
    image: ''
};

const petOneReducer = (state = initialState, action) => {
    switch (action.type) {
        case petTypes.FETCH_PET_GET_ONE_REQUEST:
            return {
                ...state,
                success: false,
                message: '',
                loading: true,
                data: [],
                image:''
            }
        case petTypes.FETCH_PET_GET_ONE_SUCCESS:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.errors,
                loading: false,
                data: action.payload.data,
                image:action.payload.data.image.image
            }
        case petTypes.FETCH_PET_GET_ONE_FAILURE:
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

export default petOneReducer;