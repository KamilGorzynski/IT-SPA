import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';
import $ from 'jquery';
import { Router, routes } from './router';
import { nav } from './navigation/nav';
import { footer } from './footer/footer';

const main = $('main');
const router = new Router(routes);

main.before(nav);

// element main bedzie "outletem" na nasze widoki
router.mount(main);

main.after(footer);

// przy uruchomieniu strony pierwszy raz
// nawigujemy do sciezki z paska adresu 
router.init();
