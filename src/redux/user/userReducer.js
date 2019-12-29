import { userTypes } from './userTypes';

const initialState = {
    isLogged: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.SIGN_IN:
            return {
                ...state,
                isLogged: true
            }
        default:
            return state;
    }
}

export default userReducer;