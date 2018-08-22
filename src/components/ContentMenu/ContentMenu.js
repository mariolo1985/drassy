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
        httpRequest("/js/menu.json", this.handleMenuRequest);
    }

    handleMenuRequest = (responseText) => {
        const menuJson = JSON.parse(responseText);
        this.setState({
            menuLoaded: true,
            menuData: menuJson
        });
    }

    render() {
        if (!this.state.menuLoaded) {
            return null;
        }

        return (
            <div className='content-menu-wrapper'>
                <div className='content-menu-list clear'>
                    {
                        this.state.menuData.contact.map((contactItem, key) => {
                            return (
                                <a key={key} href={contactItem.url} className='content-menu-link'>
                                    {contactItem.name}
                                </a>
                            )
                        })
                    }
                </div>
                <div className='content-menu-underline' />
            </div>
        );
    }
}

export default ContentMenu;