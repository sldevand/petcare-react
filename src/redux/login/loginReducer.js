import { loginTypes } from './loginTypes';

const initialState = {
    success: false,
    message: ''
};

const loginReducer = (state = initialState, action) => { 
    switch (action.type) {
        case loginTypes.FETCH_LOGIN_REQUEST:
            return {
                ...state,
                success: false,
                message: ''
            }
        case loginTypes.FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.message
            }
        case loginTypes.FETCH_LOGIN_FAILURE:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.errors
            }
        default: return state;
    }
}

export default loginReducer;