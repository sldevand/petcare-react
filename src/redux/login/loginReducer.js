import { loginTypes } from './loginTypes';

const initialState = {
    success: false,
    message: '',
    loggedIn: false,
    loading: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginTypes.FETCH_LOGIN_REQUEST:
            return {
                ...state,
                success: false,
                message: '',
                loggedIn: false,
                loading: true
            }
        case loginTypes.FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.message,
                loggedIn: true,
                loading: false
            }
        case loginTypes.FETCH_LOGIN_FAILURE:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.errors,
                loggedIn: false,
                loading: false
            }
        case loginTypes.IS_LOGGED_IN:
            return {
                ...state,
                loggedIn: action.loggedIn,
                loading: false
            }
        default: return state;
    }
}

export default loginReducer;