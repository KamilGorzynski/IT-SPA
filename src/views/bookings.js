// bookings.js

import $ from 'jquery';

export const bookings = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $('<h1>Bookings</h1>');
    const p = $(`
    <table class="table table-hover table-dark">
    <thead>
        <tr>
        <th scope="col">Product</th>
        <th scope="col">Amount</th>
        <th scope="col">Price</th>
        <th scope="col">Remove</th>
        </tr>
    </thead>
    <tbody>   
    </tbody>
    <thead>
        <tr>
        <th scope="col">Total</th>
        <th scope="col"></th>
        <th class="total" scope="col">0</th>
        <th scope="col" class="center"><button type="button" class="clearCart btn btn-danger">Clear</button></th>
        </tr>
    </thead>
    </table>
    `);

    fragment.append(h1).append(p);

    return fragment;
};
