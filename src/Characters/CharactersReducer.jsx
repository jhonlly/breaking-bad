const initialState = {
    characters: [],
    loading: false,
    error: null,
    hasMoreData: true,
};


const CharactersReducer = (state, action) => {
    switch (action.type) {
    case 'FETCH_CHARACTERS_START':
        return {
            ...state,
            loading: true,
        };
    case 'FETCH_CHARACTERS_SUCCESS':
        return {
            ...state,
            loading: false,
            characters: [...state.characters, ...action.payload],
        };
    case 'FETCH_CHARACTERS_FAILURE':
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
