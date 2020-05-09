import { api } from './api.service';

async function add(name, title, content, appointmentDate) {
    let response = await api.handleSecuredPost(
        `api/cares/${name}`,
        {
            title, content, appointmentDate
        }
    );

    return response;
}

async function update(name, careId, title, content, appointmentDate) {
    let response = await api.handleSecuredPut(
        `api/cares/${name}/${careId}`,
        {
            title, content, appointmentDate
        }
    );

    return response;
}

async function getList(name) {
    let response = await api.handleSecuredGet(
        `api/cares/${name}`
        );

    return response;
}

async function getOne(name, careId) {
    let response = await api.handleSecuredGet(
        `api/cares/${name}/${careId}`
        );

    return response;
}


export const careService = {
    add,
    update,
    getList,
    getOne
};