import React from 'react';
import PropTypes from 'prop-types';

const MenuHeader = ({
    onCloseMobileMenu
}) => {
    return (
        <div className='heading'>
            <div className='heading-mobile-close' id='heading-mobile-close' onClick={onCloseMobileMenu}>
                <svg width="18" height="13" viewBox="0 0 18 13">
                    <g fill="none" fillRule="evenodd" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                        <path d="M1.5 6.5h15M11.5 1.5l5 5-5 5" />
                    </g>
                </svg>
            </div>
            <div className='heading-text'>
                <a href='/' className='heading-link'>Daniel Rasmussen</a>
            </div>
            <div className='heading-underline menu-divider' />
        </div>
    );
};

MenuHeader.propTypes = {
    onCloseMobileMenu: PropTypes.func.isRequired
};

export default MenuHeader;
