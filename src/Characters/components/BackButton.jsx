import React from 'react';
import { useLocation } from 'wouter';
import * as PropTypes from 'prop-types';

const BackButton = ({text}) => {
    const [, setLocation] = useLocation();
    const styleButton = 'bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md';

    return (
        <button 
            onClick={() => setLocation('/')}
            className={styleButton}
        >
            {text}
        </button>
    );
};

BackButton.propTypes = {
    text: PropTypes.string,
};


export default BackButton;