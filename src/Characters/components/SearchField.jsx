import React from 'react';
import * as PropTypes from 'prop-types';
export const SearchField = ({onChange, value, placeholder, onSearch}) => 

    <form className="flex items-center justify-center w-100 my-9" onSubmit={onSearch}>
        <div className="flex border-2 border-gray-900  rounded w-full">
            <input onChange={onChange} type="text" className="px-4 py-2 w-full text-center outline-none" placeholder="" value={value}/>
            <button className="px-4 text-white bg-[#045922] font-bold border-l ">
                {placeholder}
            </button>
        </div>
    </form>;



SearchField.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func
};
