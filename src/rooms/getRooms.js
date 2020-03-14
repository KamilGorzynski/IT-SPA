import { roomCard } from './roomCard';
import { addListeners } from './addRoomToCard';
import { serviceInactive } from '../common/serviceInactive'


const axios = require('axios').default;

export function getRoomsData(){
    const roomsDiv = document.querySelector('.rooms');  
    axios.get('http://localhost:5000/rooms')
    .then(function (response) {    
       response.data.map(room =>roomsDiv.append(roomCard(room)));
       addListeners();
    })
    .catch(function (error) {
        roomsDiv.append(serviceInactive())
    });
}