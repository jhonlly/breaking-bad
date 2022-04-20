import { get } from '../../shared/services/utlis';

const getDetails = ( id) => {
    return get(`characters/${id}`);
};

const getRandomQuote = (name) => {
    return get(`quote/random?author=${name}`);
};

export  {
    getDetails,
    getRandomQuote
};
