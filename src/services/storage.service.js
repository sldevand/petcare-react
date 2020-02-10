function setApiKey(apiKey) {
    sessionStorage.setItem('apiKey', apiKey);
}

function getApiKey() {
    return sessionStorage.getItem('apiKey');
}

function removeApiKey() {
    return sessionStorage.removeItem('apiKey');
}

export const storageService = {
    setApiKey,
    getApiKey,
    removeApiKey
};