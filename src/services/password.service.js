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

async function passwordChange(email, id, resetCode, newPassword) {
    let response = await api.handlePost(
        `user/passwordChange/${id}/${resetCode}`,
        {
            email,
            newPassword
        }
    );

    return response;
}



export const passwordService = {
    passwordReset,
    passwordChange
};