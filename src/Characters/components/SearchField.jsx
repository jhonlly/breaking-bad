import React from 'react';
import * as PropTypes from 'prop-types';

export const SearchField = ({onChange, value, placeholder, onSearch}) => 
    <form onSubmit={onSearch}>
        <input
            type="search"
            className="w-100 py-2 my-9 w-full rounded border-4 border-gray-900 text-center outline-none  placeholder-gray-500 text-2xl shadow-lg"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    </form>;
SearchField.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func
};
