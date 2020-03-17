import $ from 'jquery';
import Icon from "../assets/page-not-found.png";

export const notFound = () => {
    const fragment = $(new DocumentFragment());

    const notFoundDiv = $(`
        <div class="notFound">
            <h1>Page not found!</h1>
            <img src="${Icon}" />
        </div>
    `);

    fragment.append(notFoundDiv);

    return fragment;
};