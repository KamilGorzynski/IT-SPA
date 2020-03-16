import { appCart } from '../it-spa';
import { cartRow } from './cartRow';


function removeProduct() {
    appCart.removeFromCart(this.attributes.target.value);
    location.reload();
};


function removeAllProducts() {
    appCart.clearCookies()
    location.reload();
};


function addListeners() {
    const buttons = document.querySelectorAll('button');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', removeProduct)
    }
    document.querySelector('.clearCart').addEventListener('click', removeAllProducts)
};


export function getCartData() {
    const tbody = document.querySelector('tbody');
    const cartData = Object.entries(appCart.getCartObject());
    let total = 0;
    for (let i=0; i < cartData.length; i++) {
        let productData = cartData[i][1];
        total += productData['price'] * productData['amount'];
        tbody.append(cartRow(cartData[i][0], productData))
    }
    document.querySelector('.total').innerHTML = total + ' EUR';
    addListeners();
};
