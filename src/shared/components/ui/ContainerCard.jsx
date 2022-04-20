import React from 'react';
import * as PropTypes from 'prop-types';

const ContainerCard = ({children, onClick}) => (<div 
    key={children.props?.char_id}
    className="flex flex-col w-full h-full bg-gray-50 rounded border-2 border-gray-900 shadow-md hover:opacity-90" 
    onClick={onClick}>        
    {children}
</div>
);

ContainerCard.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ContainerCard;