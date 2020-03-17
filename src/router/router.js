import $ from 'jquery';
import { notFound } from '../views/notFound';
import { getRoomsData } from '../rooms/getRooms'
import { getTreatmentsData } from '../treatments/getTreatments'
import { getCartData } from '../bookings/getFromCart'

export class Router {

    constructor(routes) {
        this.routes = routes;
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
        // znajduje sciezke o zadanym path lub zwraca undefined
        return this.routes.find(route => route.path === path);
    }

    has(path) {
        return this.get(path) !== undefined;
    }

    fetchData(path) {
        if (path === '/rooms'){
            getRoomsData();
        }else if (path === '/treatments'){
            getTreatmentsData();
        }else if (path === '/bookings'){
            getCartData();
        }
    }

    navigate(path, data = {}) {
        if (this.has(path)) {
            // obsluguje istniejaca sciezke
            const { component } = this.get(path);
            const html = component();
            // renderuje nowy widok wewnatrz elementu "outlet"
            this.outlet.empty().append(html);
            this.fetchData(path)
        } else {
            // obluguje nieistniejaca sciezke (oops...)
            const html = notFound();
            this.outlet.empty().append(html);
        }

        // zapamietuje nowy "stan" w przegladarce oraz
        // ustawia wybrana sciezke -- path
        history.pushState(data, '', path);
    }

}
