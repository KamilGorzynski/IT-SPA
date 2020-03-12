import $ from 'jquery';

export const rooms = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $('<h1>Rooms</h1>');
    const div = $('<div class="rooms"></div>');

    fragment.append(h1).append(div);

    return fragment;
};
