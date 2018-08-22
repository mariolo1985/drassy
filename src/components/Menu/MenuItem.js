import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({
    name,
    tagline,
    url
}) => {
    return (
        <div className='menu-item' >
            <a href={url} className='menu-link'>
                <div className='menu-item-name'>{name}</div>
                <div className='menu-item-tagline'>{tagline}</div>
            </a>
        </div>
    );
};

export default MenuItem;