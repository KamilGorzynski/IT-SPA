import $ from 'jquery';

export const logIn = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $('<h1>Log In uuuuuuuuuu</h1>');
    const div = $('<div class="rooms"></div>');

    fragment.append(h1).append(div);

    return fragment;
};