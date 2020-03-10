// rooms.js

import $ from 'jquery';

const axios = require('axios').default;

export function setTitle(){
    axios.get('http://localhost:5000/rooms')
    .then(function (response) {
       const ul = document.querySelector('.my_title');      
       response.data.map(room =>ul.append($(`<li>${room.name}</li>`)[0]));
    })
    .catch(function (error) {
        console.log(error);
    });
}




export const rooms = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $('<h1>Rooms</h1>');
    const p = $('<ul class="my_title"></ul>');

    fragment.append(h1).append(p);

    return fragment;
};
