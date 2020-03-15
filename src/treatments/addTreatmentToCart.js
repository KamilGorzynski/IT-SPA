import { appCart } from '../it-spa';

function addTreatmentToCart(){

    const childNodes = this.parentElement.childNodes;
    const treatmentKey = childNodes[1].innerText
    
    const treatmentData = {
        'price': childNodes[7].childNodes[1].innerText
    }

    appCart.addToCart(treatmentKey, treatmentData)
    alert('Treatment added to Cart');
}

export function addListeners() {
    const buttons = document.querySelectorAll('button');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', addTreatmentToCart)
    }
}