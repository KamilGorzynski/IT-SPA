import $ from 'jquery';
import { routes } from '../router';
import { navItem } from './nav-item';

export const nav = () => {
    const fragment = $(new DocumentFragment());

    const navBar = $(`
        <nav class="navbar navbar-expand navbar-dark ">
            <span class="navbar-brand">IT SPA</span>
            <ul class="navbar-nav mr-auto"></ul>
            <span class="navbar-brand">Log in | Sign up</span>
        </nav>
    `);

    const navBarItems = routes.map(route => navItem(route));
    
    navBar.find('ul').append(navBarItems);

    fragment.append(navBar);

    return fragment;
};
