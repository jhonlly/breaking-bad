
const BASE_URL = 'https://breakingbadapi.com/api/';

const get = (url) => {
    return fetch(`${BASE_URL}${url}`);
};

export {
    get
};
