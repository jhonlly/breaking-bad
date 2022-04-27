import {useReducer} from 'react';
import {initialState, reducerDetails } from '../reducer';


const useCharactersDetails = (repository) => {
    const [{details, loading, error, quote}, dispatch] = useReducer(reducerDetails, initialState);

    const fetchCharactersDetails = async (id) => {
        dispatch( {type: 'CHARACTERS_DETAILS_FETCH_START',} );
        try {
            const response =  await repository.getDetails(id);
            const data = await response.json();
            const responseQuote = await repository.getRandomQuote(data[0].name);
            const quote = await responseQuote.json();
            dispatch( {type: 'CHARACTERS_DETAILS_FETCH_SUCCESS', payload: data[0]} );
            dispatch( {type: 'CHARACTERS_DETAILS_QUOTE_FETCH_SUCCESS', payload: quote} );
        } catch (error) {
            dispatch( {type: 'CHARACTERS_DETAILS_FETCH_FAILURE', payload: error} );
        }
    };

    return { details, loading, error, quote, fetchCharactersDetails };

};

export default useCharactersDetails;
