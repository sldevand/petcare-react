import { api } from './api.service';

async function login(email, password) {
    let response = await api.handlePost(
        'user/login',
        {
            email: email,
            password: password
        }
    );

    return response;
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

    return response;
}

export const userService = {
    login,
    subscribe
};