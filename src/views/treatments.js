// treatments.js

import $ from 'jquery';

export const treatments = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $('<h1>Treatments</h1>');
    const div = $('<div class="treatments"></div>');

    fragment.append(h1).append(div);

    return fragment;
};
