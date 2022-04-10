import React from 'react';
import * as PropTypes from 'prop-types';

export const SearchField = ({onChange, value}) => <input
    type="text"
    className="w-auto accent-green-50 py-2 my-9 w-full rounded text-center text-amber-700 placeholder-green-500 text-2xl shadow-lg"
    placeholder="Search"
    onChange={onChange} value={value}
/>;

SearchField.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
};
