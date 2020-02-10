import config from './../config';
import { storageService } from './storage.service';

export const api = {
    handlePost,
    handleGet,
    handleSecuredGet
};

async function handlePost(endpoint, body) {
    let json = await handleRequest('POST', endpoint, null, body);

    return json;
}

async function handleGet(endpoint) {
    let json = await handleRequest('GET', endpoint);

    return json;
}

async function handleSecuredGet(endpoint) {

    const apiKey = storageService.getApiKey();


    let headers = {
        'Authorization':'Bearer ' + apiKey
    }

    let json = await handleRequest('GET', endpoint, headers);

    return json;
}

async function handleRequest(method, endpoint, headers = null, body = null) {

    let options = {
        method: method
    }

    if (body) {
        options.body = JSON.stringify(body);
    }

    if (headers) {
        options.headers = headers;
    }

console.log(options);

    let response = await fetch(`${config.apiUrl}/${endpoint}`, options);
    let json = await response.json();

    return json;
}