import $ from 'jquery';

export const treatmentCard = (treatment) => {
    
    return $(`
        <div class="cardTreatment">
            <div class="card-body">
            <h5 class="card-title">${treatment.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Area: ${treatment.area}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Time: ${treatment.time}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Price: ${treatment.price} EUR</h6>
            <p class="card-text">${treatment.description}</p>
            <button type="button" class="btn btn-secondary">Add to cart</button>
            </div>
        </div>
    `)[0];
};