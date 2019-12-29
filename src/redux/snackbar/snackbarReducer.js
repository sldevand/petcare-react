import { snackbarTypes } from './snackbarTypes';

const initialState = {
    message: '',
    variant: "error",
    open: false
};

const snackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case snackbarTypes.SNACKBAR_OPEN:
            return {
                ...state,
                message: action.message,
                variant: action.variant,
                open: true
            }
        case snackbarTypes.SNACKBAR_CLOSE:
            return {
                ...state,                
                open: false
            }

        default: return state;
    }
}

export default snackbarReducer;