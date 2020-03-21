import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import './it-spa.scss';
import { Router, routes, userRoutes } from './router';
import { nav } from './navigation/nav';
import { footer } from './footer/footer';
import { Cart } from './cart/cart';


const main = $('main');

export const router = new Router(routes, userRoutes);

export let appCart = new Cart()

main.before(nav);

// element main bedzie "outletem" na nasze widoki
router.mount(main);

main.after(footer);

// przy uruchomieniu strony pierwszy raz
// nawigujemy do sciezki z paska adresu 
router.init();
