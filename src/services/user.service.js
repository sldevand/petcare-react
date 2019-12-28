import config from './../config';

export const userActions = {
    login,
    subscribe
};

async function login(email, password) {

    let response = await handlePost(
        'user/login',
        {
            email: email,
            password: password
        }
    );

    return response;
}

async function subscribe(email, firstName, lastName, password) {

    let response = await handlePost(
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

async function handlePost(endpoint, body) {
    let response = await fetch(`${config.apiUrl}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(body)
    });

    let json = await response.json();

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