import { get } from '../../shared/services/utlis';

const getCharacters = async ({ limit, offset}) => {
    return get(`characters?limit=${limit}&offset=${offset}`);
};

const searchCharacters = async ({ name }) => {
    return get(`characters?name=${name}`);
};

export {
    getCharacters,
    searchCharacters
};
