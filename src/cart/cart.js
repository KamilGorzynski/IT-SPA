
export class Cart {

    constructor() {
        if (!this.cardExists()) {
            this.clearCookies();    
        }      
    }

    clearCookies() {
        document.cookie = `CART={}`;
    }

    cardExists() {
        const cookies = document.cookie.split(';');
        return cookies.find(item => item.includes('CART')) !== undefined;
    }

    getCartObject() {
        return JSON.parse(document.cookie.split('=')[1]);
    }

    addToCart(key, productData) {
        // productData must be an object!
        let cartObject = this.getCartObject();
        cartObject[key] = productData;
        let stringifyCard = JSON.stringify(cartObject)
        document.cookie = `CART=${stringifyCard}`; 
    } 

    removeFromCart(key) {
        let cartObject = this.getCartObject();
        delete cartObject[key]
        let stringifyCard = JSON.stringify(cartObject)
        document.cookie = `CART=${stringifyCard}`; 
    }
}

