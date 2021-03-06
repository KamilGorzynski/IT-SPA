import $ from 'jquery';

export const treatmentCard = (treatment) => {
    return $(`
        <div class="col-12 col-md-6 col-lg-4">
            <div class="cardTreatment">
                <img src="${treatment.photo}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${treatment.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Area: ${treatment.area}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Time: ${treatment.time}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Price: <span>${treatment.price}</span> EUR</h6>
                <p class="card-text">${treatment.description}</p>
                <input type="number" max="10" min="1" value="1"></br>
                <button type="button" class="AddToCart btn btn-secondary">Add to cart</button>
                </div>
            </div>
        </div>
    `)[0];
};