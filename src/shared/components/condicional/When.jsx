import React from 'react';
import * as PropTypes from 'prop-types';

const When = ({ condition, children }) => {
    if (condition) {
        return children;
    }
    return <></>;
};

When.propTypes = {
    condition: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
};


export default When;
