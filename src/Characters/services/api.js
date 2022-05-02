import { get } from '../../shared/services/utlis';

const getCharacters = async ({ limit, offset}) => {
    return get(`characters?limit=${limit}&offset=${offset}`);
};

const searchCharacters = async ({ query }) => {
    return get(`characters?name=${query}`);
};

export {
    getCharacters,
    searchCharacters
};
