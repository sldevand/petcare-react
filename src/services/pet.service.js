import { api } from './api.service';

async function add(name, dob, specy, image) {
    let response = await api.handlePost(
        'pets',
        {
            name, dob, specy, image
        }
    );

    return response;
}

export const petService = {
    add
};