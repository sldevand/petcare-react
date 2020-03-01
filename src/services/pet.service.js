import { api } from './api.service';

async function add(name, dob, specy, image) {
    let response = await api.handleSecuredPost(
        'api/pets',
        {
            name, dob, specy, image
        }
    );

    return response;
}

async function getList() {
    let response = await api.handleSecuredGet('api/pets');

    return response;
}

async function getPetImage(id) {
    let response = await api.handleSecuredGet('api/pets/image/' + id);

    return response;
}

export const petService = {
    add,
    getList,
    getPetImage
};