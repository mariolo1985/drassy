import React from 'react';
import { render } from 'react-dom';
import Menu from '../build/Menu/Menu';
import ContentMenu from '../build/ContentMenu/ContentMenu';

(() => {
    // render menu
    const menu = document.getElementById('menu-container');
    if (menu !== null) {
        render(
            <Menu />,
            menu
        );
    }

    // render content menu
    const contentMenu = document.getElementById('content-menu');
    if (contentMenu !== null) {
        render(
            <ContentMenu />,
            contentMenu
        );
    }
})();