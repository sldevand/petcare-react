import {api} from './api.service';

export const userActions = {
    login,
    subscribe
};

async function login(email, password) {
    let response = await api.handlePost(
        'user/login',
        {
            email: email,
            password: password
        }
    );

    return returnState(response);
}

async function subscribe(email, firstName, lastName, password) {
    let response = await api.handlePost(
        'user/subscribe',
        {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password
        }
    );

    return returnState(response);
}

function returnState(json){
    if (json.status === 1 && json.message) {
        return {
            success: true,
            message: json.message,
            open: true
        };
    }

    if (json.status === 0 && json.errors) {
        return {
            success: false,
            message: json.errors,
            open: true
        };
    }
}
