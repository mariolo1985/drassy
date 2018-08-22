import React, { Component } from 'react';
import { httpRequest } from '../utils/httpRequest';

import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';

class Menu extends Component {
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
            <div className='menu'>
                <MenuHeader />
                {/* work */}
                <div className='menu-list'>
                    {
                        this.state.menuData.work.map((workItem, key) => {
                            return (
                                <MenuItem {...workItem} key={key} />
                            );
                        })
                    }
                </div>
                <div className='menu-divider' />
                {/* apps */}
                <div className='menu-list'>
                    {
                        this.state.menuData.app.map((appItem, key) => {
                            return (
                                <MenuItem {...appItem} key={key} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Menu;