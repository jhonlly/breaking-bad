import {useEffect, useReducer} from 'react';
import {initialState, reducer} from '../reducer';
import * as Services from '../services/api';

const useCharactersList = ({limit = 10, offset= 0}) => {
    const [{characters, loading, error }, dispatch] = useReducer(reducer, initialState  );

    const fetchCharacters = async () => {
        dispatch({ type: 'FETCH_CHARACTERS_START' });
        try {
            const response =  await Services.getCharacters({limit, offset});
            const data = await response.json();
            dispatch({ type: 'FETCH_CHARACTERS_SUCCESS', payload: data });

        } catch (error) {
            dispatch({ type: 'FETCH_CHARACTERS_FAILURE', payload: error.message });
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, [offset]);

    return { characters, loading, error };
};

export  default useCharactersList;
