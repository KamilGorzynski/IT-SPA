import { appCart } from '../it-spa';


let dapArrDiff;

function dateValidate(btn) {
    const arrival = new Date(btn.parentElement.childNodes[11].value);
    const departure = new Date(btn.parentElement.childNodes[13].value);
    const today = new Date();
    const one_day = 1000 * 60 * 60 * 24
    
    dapArrDiff = Math.round(departure.getTime() - arrival.getTime()) / one_day;
    if (!arrival.getDate() || !departure.getDate() ) {
        alert('No arrival or departure date');
        return false
    }
    if (arrival < today ) {
        alert('Past or present arrival date');
        return false
    }
    if (departure < today < 0) {
        alert('Past or present departure date');
        return false
    }
    if (arrival > departure) {
        alert('Departre date lower then arrival');
        return false
    }
    if (dapArrDiff > 365) {
        alert('Over the year');
        return false
    }
    return true
}


function addRoomToCart(){
    if (dateValidate(this)){
        const childNodes = this.parentElement.childNodes;
        const roomKey = childNodes[1].innerText
        
        const roomData = {
            'amount': dapArrDiff,
            'price': Number(childNodes[3].childNodes[1].innerText),
            'arrival': childNodes[11].value,
            'departure': childNodes[13].value,
        }
    
        appCart.addToCart(roomKey, roomData)
        alert('Room has been added to Cart');
    }
}


export function addListeners() {
    const buttons = document.querySelectorAll('button');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', addRoomToCart)
    }
}