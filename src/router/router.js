import $ from 'jquery';
import { notFound } from '../views/notFound';
import { getRoomsData } from '../rooms/getRooms';
import { getTreatmentsData } from '../treatments/getTreatments';
import { getCartData } from '../bookings/getFromCart';
import { createUser } from '../signUp/createUser';
import { logInUser } from '../logIn/logIn';

export class Router {

    constructor(routes, userRoutes) {
        this.routes = routes;
        this.userRoutes = userRoutes;
        this.outlet;
        this.body = $(document.body);
    }

    mount(outlet) {
        this.outlet = outlet;
        this.body.on('routechange', (event, detail) => {
            const { path } = detail;
            this.navigate(path);
        });
    }

    init() {
        const path = location.pathname;
        this.navigate(path);
    }

    get(path) {
        return this.routes.find(route => route.path === path) || 
        this.userRoutes.find(route => route.path === path);
    }

    has(path) {
        return this.get(path) !== undefined;
    }

    prepareComponents(path) {
        if (path === '/rooms'){
            getRoomsData();
        }else if (path === '/treatments'){
            getTreatmentsData();
        }else if (path === '/bookings'){
            getCartData();
        }else if (path === '/sign-up'){
            createUser();
        }else if (path === '/log-in'){
            logInUser();
        }
    }

    navigate(path, data = {}) {
        if (this.has(path)) {
            const { component } = this.get(path);
            const html = component();
            this.outlet.empty().append(html);
            this.prepareComponents(path)
        } else {
            const html = notFound();
            this.outlet.empty().append(html);
        }

        history.pushState(data, '', path);
    }

}
