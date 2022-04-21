import React from 'react';
import * as PropTypes from 'prop-types';

export const SearchField = ({onChange, value, placeholder}) => <input
    type="text"
    className="w-100 py-2 my-9 w-full rounded border-4 border-gray-900 text-center outline-none  placeholder-gray-500 text-2xl shadow-lg"
    placeholder={placeholder}
    onChange={onChange} value={value}
/>;

SearchField.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
};
