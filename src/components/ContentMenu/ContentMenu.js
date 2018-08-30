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

    render() {
        const {
            menuLoaded,
            menuData
        } = this.state;
        if (!menuLoaded) {
            return null;
        }

        return (
            <div className="content-menu-wrapper">
                <div className="content-menu-list clear">
                    {
                        menuData.contact.map((contactItem) => {
                            if (contactItem.name === 'Contact') {
                                return (
                                    <a key={contactItem.name} href={contactItem.url} className="content-menu-link" rel="noopener noreferrer">
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
