const initialState = {
    characters: [],
    loading: false,
    error: null,
    hasMoreData: true,
};

export const  ACTIONS = {
    FETCH_CHARACTERS_START: 'FETCH_CHARACTERS_START',
    FETCH_CHARACTERS_SUCCESS: 'FETCH_CHARACTERS_SUCCESS',
    FETCH_CHARACTERS_FAILURE: 'FETCH_CHARACTERS_FAILURE',
    SEARCH_CHARACTERS_SUCCESS: 'SEARCH_CHARACTERS_SUCCESS',
    SEARCH_CHARACTERS_RESET: 'SEARCH_CHARACTERS_RESET',
};

const CharactersReducer = (state, action) => {
    switch (action.type) {
    case ACTIONS.FETCH_CHARACTERS_START:
        return {
            ...state,
            loading: true,
        };
    case ACTIONS.FETCH_CHARACTERS_SUCCESS:
        return {
            ...state,
            loading: false,
            characters: [...state.characters, ...action.payload],
        };
    case ACTIONS.SEARCH_CHARACTERS_SUCCESS:

        return {
            ...state,
            loading: false,
            characters: [...action.payload],
        };  
    case ACTIONS.SEARCH_CHARACTERS_RESET:
        return {
            ...state,
            loading: false,
            characters: [ ],
        };      

    case ACTIONS.FETCH_CHARACTERS_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    default:
        return state;
    }
};

export  {CharactersReducer, initialState};
