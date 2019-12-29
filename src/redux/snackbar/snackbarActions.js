import { snackbarTypes } from "./snackbarTypes"

const close = () => {
    return {
        type: snackbarTypes.SNACKBAR_CLOSE
    }
}

const open = (message, variant) => {
    return {
        type: snackbarTypes.SNACKBAR_OPEN,
        message: message,
        variant: variant
    }
}

export const snackbarActions = {
    open, close
}