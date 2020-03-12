import $ from 'jquery';

export const roomCard = (room) => {
    return $(`
        <div class="my_card">
            <div class="card-body">
                <h5 class="card-title">${room.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Price: ${room.price} EUR</h6>
                <h6 class="card-subtitle mb-2 text-muted">Guests: ${room.guests}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Beds: ${room.beds}</h6>    
                <p class="card-text">${room.description}</p>
                Arrival: <input type="date">
                Departure: <input type="date">
                <button type="button" class="btn btn-secondary">Add to cart</button>
            </div>
        </div>
    `)[0];
};