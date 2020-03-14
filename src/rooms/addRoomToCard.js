function dateValidate(btn) {
    const arrival = new Date(btn.form[0].value);
    const departure = new Date(btn.form[1].value);
    const today = new Date();
    const one_day = 1000 * 60 * 60 * 24 

    if (arrival && arrival.getDate() - today.getDate() < 0) {
        alert('Past arrival date');
    }

    if (departure && departure.getDate() - today.getDate() < 0) {
        alert('Past departure date');
    }

    if (arrival && departure && Math.round(departure.getTime() - arrival.getTime()) / one_day > 365) {
        alert('Over year');
    }
}


function addRoomToCard(){
    dateValidate(this);
}


export function addListeners() {
    const buttons = document.querySelectorAll('button');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', addRoomToCard)
    }
}