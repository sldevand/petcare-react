import { api } from './api.service';

async function login(email, password) {
    let response = await api.handlePost(
        'user/login',
        {
            email: email,
            password: password
        }
    );

    if (response.apiKey) {
        localStorage.setItem('apiKey', response.apiKey);
    }

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