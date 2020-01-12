import { userTypes } from './userTypes';

const initialState = {
    loaded: false,
    firstName: '',
    lastName: '',
    email: '',
    message: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.FETCH_USER_REQUEST:
            return {
                ...state,
                loaded: false,
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            }
        case userTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loaded: true,
                firstName: action.payload.data.firstName,
                lastName: action.payload.data.lastName,
                email: action.payload.data.email,
                message: action.payload.message,

            }
        case userTypes.FETCH_USER_FAILURE:
            return {
                ...state,
                loaded: true,
                firstName: '',
                lastName: '',
                email: '',
                message: action.payload.errors,

            }
        case userTypes.FETCH_USER_ACTIVATION:
            return {
                ...state,
                loaded: true,
                activated: action.payload.data.activated,  
                message: action.payload.message
            }
        default: return state;
    }
}

export default userReducer;