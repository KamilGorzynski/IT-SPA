import { appCart } from '../it-spa';

function addTreatmentToCart(){

    const childNodes = this.parentElement.childNodes;
    const treatmentKey = childNodes[1].innerText
    const amount = childNodes[11].value;
    if (amount <= 0) {
        alert('Amount equal or lower then 0');
        return
    }
    
    const treatmentData = {
        'price': Number(childNodes[7].childNodes[1].innerText),
        'amount': amount
    }

    appCart.addToCart(treatmentKey, treatmentData)
    alert('Treatment has been added to Cart');
}

export function addListeners() {
    const buttons = document.querySelectorAll('.AddToCart');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', addTreatmentToCart)
    }
}