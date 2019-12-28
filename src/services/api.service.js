import config from './../config';

export const api = {
    handlePost
};

async function handlePost(endpoint, body) {
    let json = await handleRequest('POST', endpoint, body);

    return json;   
}

async function handleRequest(method, endpoint, body=null) {

    let options = {
        method: method       
    }

    if(body) {
        options.body = JSON.stringify(body);
    }

    let response = await fetch(`${config.apiUrl}/${endpoint}`, options);
    let json = await response.json();

    return json;
}