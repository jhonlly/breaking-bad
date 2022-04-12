import {useEffect, useReducer} from 'react';
import {initialState, reducerDetails } from '../reducer';
import * as Services from '../services/api';

const useCharactersDetails = (id) => {
    const [{details, loading, error, quote}, dispatch] = useReducer(reducerDetails, initialState);

    const fetchCharactersDetails = async () => {
        dispatch( {type: 'CHARACTERS_DETAILS_FETCH_START',} );
        try {
            const response =  await Services.getDetails(id);
            const data = await response.json();
            const responseQuote = await Services.getRandomQuote(data[0].name);
            const quote = await responseQuote.json();
            dispatch( {type: 'CHARACTERS_DETAILS_FETCH_SUCCESS', payload: data[0]} );
            dispatch( {type: 'CHARACTERS_DETAILS_QUOTE_FETCH_SUCCESS', payload: quote} );
        } catch (error) {
            dispatch( {type: 'CHARACTERS_DETAILS_FETCH_FAILURE', payload: error} );
        }
    };

    useEffect(() => {
        id && fetchCharactersDetails();
    }, [id]);

    return { details, loading, error, quote };

};

export  default useCharactersDetails;
