import $ from 'jquery';

export const serviceInactive = () => {
    return $(`<h4>Przepraszamy, serwis czasowo niedostępny.</h4>`)[0];
};