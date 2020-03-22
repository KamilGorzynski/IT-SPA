import { appCart } from '../it-spa';
import $ from 'jquery';


export const loggedNavItem = () => {
    const fragment = $(new DocumentFragment());

    const loginli = $(`<li class="nav-item"></li>`);
    const loginAncor = $(`<a class="text-light nav-link">${appCart.getCookie('user').split('=')[1]}</a>`);
    loginli.append(loginAncor);

    const logoutli = $(`<li class="nav-item"></li>`);
    const logOutAncor = $(`<a class="text-light nav-link">Log Out</a>`);

    logOutAncor.on('click', (event) => {
        appCart.clearTokenAndUser();
        location.reload();
    });
    logoutli.append(logOutAncor);
    fragment.append(loginli).append(logoutli);

    return fragment;
};