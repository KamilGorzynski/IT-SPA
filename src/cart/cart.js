
export class Cart {

    constructor() {
        if (!this.cardExists()) {
            this.clearCookies();    
        }      
    }

    clearCookies() {
        document.cookie = `cart={}`;
    }

    cardExists() {
        const cookies = document.cookie.split(';');
        return cookies.find(item => item.includes('cart')) !== undefined;
    }

    getCartObject() {
        const cart = document.cookie.split(';').find(item => item.includes('cart'));
        return JSON.parse(cart.split('=')[1]);
    }

    addToCart(key, productData) {
        // productData must be an object!
        let cartObject = this.getCartObject();
        cartObject[key] = productData;
        let stringifyCard = JSON.stringify(cartObject);
        document.cookie = `cart=${stringifyCard}`; 
    } 

    removeFromCart(key) {
        let cartObject = this.getCartObject();
        delete cartObject[key];
        let stringifyCard = JSON.stringify(cartObject);
        document.cookie = `cart=${stringifyCard}`; 
    }

    addAuthToken(token) {
        document.cookie = `token=${token}`;
    }

    tokenExists() {
        const cookies = document.cookie.split(';');
        return cookies.find(item => item.includes('token')) !== undefined;
    }
}

