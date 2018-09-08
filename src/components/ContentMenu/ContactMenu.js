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

    const handleGoBackClick = () => {
        history.back();
    };

    return (
        <div className='content-menu-wrapper'>
            <div className='content-mobile-menu-trigger' id='content-mobile-menu-trigger' onClick={handleMobileMenuClick}>
                <svg width='16' height='15' viewBox='0 0 16 15'>
                    <g fill='none' fillRule='evenodd'>
                        <g fill='#D7E4E8' fillRule='nonzero'>
                            <path d='M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z' />
                        </g>
                    </g>
                </svg>
            </div>
            <div className='content-menu-list clear'>
                <div className='contact-item item-1of3 left timezone'>
                    <i className='contact-item icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g fill="none" fillRule="evenodd" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(1 1)">
                                <circle cx="9" cy="9" r="8.4" />
                                <path d="M9 4.2V9h4.8" />
                            </g>
                        </svg>
                    </i>
                    <span className='contact-menu-text'>MST</span>
                </div>
                <div className='contact-item item-1of3 center contact-menu-heading'>Contact</div>
                <div className='contact-item item-1of3 right'>
                    <i className='contact-item icon goback' onClick={handleGoBackClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <g fill="none" fillRule="evenodd" stroke="#111" strokeLinecap="round" stroke-Linejoin="round" strokeWidth="2">
                                <path d="M12.5 1.5l-11 11M1.5 1.5l11 11" />
                            </g>
                        </svg>

                    </i>
                </div>
            </div>
            <div className='content-menu-underline' />
        </div>
    );
};

export default ContactMenu;
