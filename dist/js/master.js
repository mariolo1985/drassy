import React from 'react';
import { render } from 'react-dom';
import Menu from '../build/Menu/Menu';
import ContentMenu from '../build/ContentMenu/ContentMenu';
import ContactMenu from '../build/ContentMenu/ContactMenu';

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

    // render contact menu
    const contactMenu = document.getElementById('contact-menu');
    if (contactMenu !== null) {
        render(
            <ContactMenu />,
            contactMenu
        );
    }
})();
