import $ from 'jquery';

export const rooms = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $('<h1>Rooms</h1>');
    const ul = $('<div class="rooms"></div>');

    fragment.append(h1).append(ul);

    return fragment;
};
