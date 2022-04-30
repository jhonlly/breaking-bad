import { useReducer } from 'react';
import {initialState, CharactersReducer, ACTIONS} from '../CharactersReducer';

const useCharactersList = ({repository}) => {
    const [{characters, loading, error }, dispatch] = useReducer(CharactersReducer, initialState);

    const fetchCharacters = async ({limit, offset}) => {
        dispatch({ type: ACTIONS.FETCH_CHARACTERS_START });
        try {
            const response =  await repository.getCharacters({limit, offset});
            const data = await response.json();
            dispatch({ type: ACTIONS.FETCH_CHARACTERS_SUCCESS, payload: data });
            
        } catch (error) {
            dispatch({ type: ACTIONS.FETCH_CHARACTERS_FAILURE, payload: error.message });
        }
    };

    const searchCharacters = async ({ name }) => {
        dispatch({ type: ACTIONS.FETCH_CHARACTERS_START });
        try {
            const response =  await repository.searchCharacters({name});
            const data = await response.json();
            dispatch({ type: ACTIONS.SEARCH_CHARACTERS_SUCCESS, payload: data });
            
        } catch (error) {
            dispatch({ type: ACTIONS.FETCH_CHARACTERS_FAILURE, payload: error.message });
        }
    };


    return { characters, loading, error, fetchCharacters, searchCharacters };
};

export default useCharactersList;
