import { useReducer } from 'react';
import {initialState, CharactersReducer} from '../CharactersReducer';

const useCharactersList = ({repository}) => {
    const [{characters, loading, error }, dispatch] = useReducer(CharactersReducer, initialState);

    const fetchCharacters = async ({limit, offset}) => {
        dispatch({ type: 'FETCH_CHARACTERS_START' });
        try {
            const response =  await repository.getCharacters({limit, offset});
            const data = await response.json();
            dispatch({ type: 'FETCH_CHARACTERS_SUCCESS', payload: data });
            
        } catch (error) {
            dispatch({ type: 'FETCH_CHARACTERS_FAILURE', payload: error.message });
        }
    };

    return { characters, loading, error, fetchCharacters };
};

export default useCharactersList;
