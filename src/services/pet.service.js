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

async function update(id, name, dob, specy, image) {
    let response = await api.handleSecuredPut(
        `api/pets/${id}`,
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

async function getOne(name) {
    let response = await api.handleSecuredGet('api/pets/' + name);

    return response;
}


export const petService = {
    add,
    update,
    getList,
    getOne
};