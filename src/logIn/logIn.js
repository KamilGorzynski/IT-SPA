import { appCart, router } from '../it-spa';
import { serviceInactive } from '../common/serviceInactive';

const axios = require('axios').default;


function getToken(){
    const login = document.querySelector('.login').value;
    const password = document.querySelector('.password').value;
    if (!login || !password){
        alert('Empty login or password');
        return;
    }
    axios.get('http://localhost:5000/token', {
        auth: {
          username: login,
          password: password
        }
      })
    .then(function (response) {
       appCart.addTokenAndUser(response.data.token, login);
       router.navigate('/');
       location.reload();
    })
    .catch(function (error) {
        const response = error.response;
        if (response) {
            if (response.status === 401) {
                alert('Invalid login or password');
                location.reload();
            }
        }        
        else {
            document.querySelector('.logInDiv').innerHTML = '';
            document.querySelector('.logInDiv').append(serviceInactive());
        }
    });
}

export function logInUser() {
    document.querySelector('.logInpBtn').addEventListener('click', getToken);
}