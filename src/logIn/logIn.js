import { appCart } from '../it-spa';
import { serviceInactive } from '../common/serviceInactive';
import { router } from '../it-spa';

const axios = require('axios').default;

function getToken(){
    axios.get('http://localhost:5000/token', {
        auth: {
          username: document.querySelector('.login').value,
          password: document.querySelector('.password').value
        }
      })
    .then(function (response) {
       appCart.addAuthToken(response.data.token);
       router.navigate('/');
    })
    .catch(function (error) {
        if (error.response.status === 401) {
            alert('Invalid login or password');
            location.reload();
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