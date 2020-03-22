// odwolujac sie do katalogu z "beczka" (index.js -- barrel)
// mozna pisac krotsze importy
import { home, rooms, treatments, bookings, signUp, logIn } from '../views';

export const routes = [
    {
        name: 'Home',
        path: '/',
        component: home,
        data: {}
    },
    {
        name: 'Rooms',
        path: '/rooms',
        component: rooms,
        data: {}
    },
    {
        name: 'Treatments',
        path: '/treatments',
        component: treatments,
        data: {}
    },
    {
        name: 'Bookings',
        path: '/bookings',
        component: bookings,
        data: {}
    }
];

export const userRoutes = [
    {
        name: 'Log In',
        path: '/log-in',
        component: logIn,
        data: {}
    },
    {
        name: 'Sign Up',
        path: '/sign-up',
        component: signUp,
        data: {}
    }
];