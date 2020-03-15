import { appCart } from '../it-spa';


let dapArrDiff;


function dateValidate(btn) {
    const arrival = new Date(btn.parentElement.childNodes[11].value);
    const departure = new Date(btn.parentElement.childNodes[13].value);
    const today = new Date();
    const one_day = 1000 * 60 * 60 * 24
    
    dapArrDiff = Math.round(departure.getTime() - arrival.getTime()) / one_day;

    if (arrival && arrival.getDate() - today.getDate() < 0) {
        alert('Past arrival date');
    }
    // jest blad na walidacji dat z nastepnego miesiaca
    if (departure && departure.getDate() - today.getDate() < 0) {
        alert('Past departure date');
    }

    if (arrival && departure && dapArrDiff > 365) {
        alert('Over year');
    }
}


function addRoomToCart(){
    dateValidate(this);

    const childNodes = this.parentElement.childNodes;
    const roomKey = childNodes[1].innerText
    

    const roomData = {
        'amount': dapArrDiff,
        'price': childNodes[3].childNodes[1].innerText,
        'arrival': childNodes[11].value,
        'departure': childNodes[13].value,
    }

    appCart.addToCart(roomKey, roomData)
    alert('Room added to Cart');
}


export function addListeners() {
    const buttons = document.querySelectorAll('button');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', addRoomToCart)
    }
}