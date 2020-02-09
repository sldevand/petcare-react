import { logoutTypes } from './logoutTypes';

const initialState = {
    success: false,
    message: '',
    loaded: false
};

const logoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case logoutTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                success: true,
                message: action.message,
                loaded: true
            }
        default: return state;
    }
}

export default logoutReducer;