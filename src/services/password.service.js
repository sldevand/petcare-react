import { api } from './api.service';

async function passwordReset(email) {
    let response = await api.handlePost(
        'user/passwordReset',
        {
            email: email
        }
    );

    return response;
}


export const passwordService = {
    passwordReset
};