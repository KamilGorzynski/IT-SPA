import $ from 'jquery';

export const navItem = (route) => {
    const li = $(`<li class="nav-item"></li>`);
    const a = $(`<a class="text-light nav-link">${route.name}</a>`);

    a.on('click', (event) => {
        event.preventDefault();
        a.trigger('routechange', { path: route.path });
    });

    li.append(a);

    return li;
};
