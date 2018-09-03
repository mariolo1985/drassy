import React from 'react';

const MenuItem = ({
    name,
    tagline,
    url
}) => {
    const addSelectClass = () => {
        const pathName = window.location.pathname;
        if ((pathName === '/') && (url.indexOf('/overstock.html') === 0)) {
            return true;
        }

        if ((pathName !== '/') && url.indexOf(pathName) === 0) {
            return true;
        }

        return false;
    };

    return (
        <div className={`menu-item${addSelectClass() ? ' selected' : ''}`}>
            <a href={url} className='menu-link'>
                <div className='menu-item-name'>{name}</div>
                <div className='menu-item-tagline'>{tagline}</div>
            </a>
        </div>
    );
};

export default MenuItem;
