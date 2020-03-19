import $ from 'jquery';
import { routes, userRoutes } from '../router';
import { navItem } from './nav-item';

export const nav = () => {
    const fragment = $(new DocumentFragment());

    const navBar = $(`
        <nav class="navbar navbar-expand navbar-dark ">
            <span class="navbar-brand">IT SPA</span>
            <ul class=" mainNav navbar-nav mr-auto"></ul>
            <span class="navbar-brand"><ul class="userNav navbar-nav mr-auto"></ul></span>
        </nav>
    `);

    const navBarItems = routes.map(route => navItem(route));
    const userItems = userRoutes.map(route => navItem(route));
    
    navBar.find('.mainNav').append(navBarItems);
    navBar.find('.userNav').append(userItems);

    fragment.append(navBar);

    return fragment;
};
