const initialState = {
    details:{
    } ,
    loading: false,
    error: null,
    quote: {},
};

const reducerDetails = (state = initialState, action) => {
    switch (action.type) {
    case 'CHARACTERS_DETAILS_FETCH_START':
        return {
            ...state,
            loading: true,
            error: null,
        };
    case 'CHARACTERS_DETAILS_FETCH_SUCCESS':
        return {
            ...state,
            details: action.payload,
            loading: false,
            error: null,
        };
    case 'CHARACTERS_DETAILS_FETCH_FAILURE':
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    case 'CHARACTERS_DETAILS_QUOTE_FETCH_SUCCESS':
        return {
            ...state,
            quote: action.payload,
            loading: false,
            error: null,
        };

    case 'CHARACTERS_DETAILS_QUOTE_FETCH_FAILURE':
        return {
            ...state,
            loading: false,
            error: action.payload,
        };

    case 'CHARACTERS_DETAILS_RESET':
        return {
            ...initialState
        };

    default:
        return state;
    }
};

export {
    reducerDetails,
    initialState
};
