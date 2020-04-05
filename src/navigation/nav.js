import $ from 'jquery';
import { routes, userRoutes } from '../router';
import { navItem } from './nav-item';
import { loggedNavItem } from './logged-nav-items';
import { appCart } from '../it-spa';

export const nav = () => {
    const fragment = $(new DocumentFragment());

    const navBar = $(`
    <nav class="navbar navbar-expand-lg navbar-dark ">
        <span class="navbar-brand">IT SPA</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class=" mainNav navbar-nav mr-auto">     
            </ul>
            <span class="navbar-brand"><ul class="userNav navbar-nav mr-auto"></ul></span>
        </div>
    </nav>
    `);

    const navBarItems = routes.map(route => navItem(route));
    navBar.find('.mainNav').append(navBarItems);
    
    let userItems;
    if (appCart.userIsLogged()) {
        userItems = loggedNavItem();
    } else {
        userItems = userRoutes.map(route => navItem(route)); 
    }
    
    navBar.find('.userNav').append(userItems);
    fragment.append(navBar);

    return fragment;
};
