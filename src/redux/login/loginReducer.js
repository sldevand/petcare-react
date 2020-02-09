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
                message: '',
                loggedIn: false
            }
        case loginTypes.FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.message,
                loggedIn: true
            }
        case loginTypes.FETCH_LOGIN_FAILURE:
            return {
                ...state,
                success: action.payload.status,
                message: action.payload.errors,
                loggedIn: false
            }
        case loginTypes.IS_LOGGED_IN:
            return {
                ...state,
                loggedIn: action.loggedIn
            }
        default: return state;
    }
}

export default loginReducer;