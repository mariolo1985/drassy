import React from 'react';

const ContactMenu = () => {
    const handleMobileMenuClick = () => {
        const mobileMenu = document.getElementById('menu-container');
        if (mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
            return;
        }

        mobileMenu.classList.add('show');
    };

    return (
        <div className='content-menu-wrapper'>
            <div className='content-mobile-menu-trigger' id='content-mobile-menu-trigger' onClick={() => handleMobileMenuClick()}>
                <svg width='16' height='15' viewBox='0 0 16 15'>
                    <g fill='none' fillRule='evenodd'>
                        <g fill='#D7E4E8' fillRule='nonzero'>
                            <path d='M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z' />
                        </g>
                    </g>
                </svg>
            </div>
            <div className='content-menu-list clear'>
                <div className='contact-item item-1of3 left'>
                    <i className='contact-item icon'>
                        <svg viewBox='0 0 512 512'><path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z' /></svg>
                    </i>
                    <span className='menu-text'>MST</span>
                </div>
                <div className='contact-item item-1of3 center'>Contact</div>
                <div className='contact-item item-1of3 right'>
                    <i className='contact-item icon'>
                        <svg viewBox='0 0 384 512'>
                            <path d='M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z' />
                        </svg>
                    </i>
                </div>
            </div>
            <div className='content-menu-underline' />
        </div>
    );
};

export default ContactMenu;
