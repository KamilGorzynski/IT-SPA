import $ from 'jquery';

export const contact = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $('<h1>Contact</h1>');
    const contactDiv = $(`
        <div class="contactDiv">
            <h6>Adress: JS avenue 55/8</h6>
            <h6>Email: it.spa@gmail.com</h6>
            <h6>Phone: 123 456 789</h6>
            <div id="mapid"></div>
        </div>
    `);

    fragment.append(h1).append(contactDiv);

    return fragment;
};