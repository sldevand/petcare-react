import { passwordTypes } from './passwordTypes';

const initialState = {
    loaded: false,
    email: '',
    message: ''
};

const passwordReducer = (state = initialState, action) => {
    switch (action.type) {
        case passwordTypes.FETCH_PASSWORD_CHANGE:
        case passwordTypes.FETCH_PASSWORD_RESET:
            return {
                ...state,
                loaded: false,
                success: false,
                message: ''
            }
        case passwordTypes.FETCH_PASSWORD_CHANGE_SUCCESS:
        case passwordTypes.FETCH_PASSWORD_RESET_SUCCESS:
            return {
                ...state,
                loaded: true,
                success: true,
                message: action.payload.message,

            }
        case passwordTypes.FETCH_PASSWORD_CHANGE_FAILURE:
        case passwordTypes.FETCH_PASSWORD_RESET_FAILURE:
            return {
                ...state,
                loaded: true,
                success: false,
                message: action.payload.errors,

            }
        default: return state;
    }
}

export default passwordReducer;