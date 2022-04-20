import { get } from '../../shared/services/utlis';

const getCharacters = async ({ limit, offset}) => {
    return get(`characters?limit=${limit}&offset=${offset}`);
};

export {
    getCharacters
};
