import React, { Component } from 'react';
import { httpRequest } from '../utils/httpRequest';

class ContentMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuLoaded: false,
            menuData: {}
        };
    }

    componentDidMount() {
        httpRequest('/js/menu.json', this.handleMenuRequest);
    }

    handleMenuRequest = (responseText) => {
        const menuJson = JSON.parse(responseText);
        this.setState({
            menuLoaded: true,
            menuData: menuJson
        });
    }

    handleMobileMenuClick = () => {
        const mobileMenu = document.getElementById('menu-container');
        if (mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
            return;
        }

        mobileMenu.classList.add('show');
    }

    render() {
        const {
            menuLoaded,
            menuData
        } = this.state;
        if (!menuLoaded) {
            return null;
        }

        return (
            <div className='content-menu-wrapper'>
                <div className='content-mobile-menu-trigger' id='content-mobile-menu-trigger' onClick={this.handleMobileMenuClick}>
                    <svg width='16' height='15' viewBox='0 0 16 15'>
                        <g fill='none' fillRule='evenodd'>
                            <g fill='#D7E4E8' fillRule='nonzero'>
                                <path d='M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z' />
                            </g>
                        </g>
                    </svg>
                </div>
                <div className='content-menu-list clear'>
                    {
                        menuData.contact.map((contactItem) => {
                            if (contactItem.name === 'Contact') {
                                return (
                                    <a key={contactItem.name} href={contactItem.url} className='content-menu-link' rel='noopener noreferrer'>
                                        {contactItem.name}
                                    </a>
                                );
                            }
                            return (
                                <a key={contactItem.name} href={contactItem.url} className="content-menu-link" target="_blank" rel="noopener noreferrer">
                                    {contactItem.name}
                                </a>
                            );
                        })
                    }
                </div>
                <div className="content-menu-underline" />
            </div>
        );
    }
}

export default ContentMenu;
