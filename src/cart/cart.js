
export class Cart {

    constructor() {
        if (!this.cookieExists('cart')) {
            this.clearCart();    
        }
        if (!this.cookieExists('token')) {
            this.clearTokenAndUser();
        }       
    }

    clearCart() {
        document.cookie = `cart={}`;
    }

    getCookie(myCookie) {
        const cookies = document.cookie.split(';');
        return cookies.find(item => item.includes(myCookie))
    }

    cookieExists(cookie) {
        return this.getCookie(cookie) !== undefined;
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

    userIsLogged(){
        const isUser = this.getCookie('user').split('=')[1];
        const isToken = this.getCookie('user').split('=')[1];
        if (isUser && isToken){     
             return true;   
        } else {
            return false;
        }
    }

    addTokenAndUser(token, user) {
        document.cookie = `token=${token}`;
        document.cookie = `user=${user}`;
    }

    clearTokenAndUser() {
        document.cookie = `token=`;
        document.cookie = `user=`;
    }

}

