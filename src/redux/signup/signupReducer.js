import { signupTypes } from './signupTypes';

const initialState = {
    success: false,
    message: ''
};

const signupReducer = (state = initialState, action) => { 
    switch (action.type) {
        case signupTypes.FETCH_SIGNUP_REQUEST:
            return {
                ...state,
                success: false,
                message: ''
            }
        case signupTypes.FETCH_SIGNUP_SUCCESS:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.message
            }
        case signupTypes.FETCH_SIGNUP_FAILURE:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.errors
            }
        default: return state;
    }
}

export default signupReducer;