import { serviceInactive } from '../common/serviceInactive';


const axios = require('axios').default;

function makeUser() {
    axios.post('http://localhost:5000/users', {
        "username": document.querySelector('.login').value,
        "password": document.querySelector('.password').value,
        "email": document.querySelector('.email').value
    })
    .then(function (response) {  
       alert(response.data.details);
    })
    .catch(function (error) {
        document.querySelector('.signUpDiv').innerHTML = '';
        document.querySelector('.signUpDiv').append(serviceInactive());
    });
}

export function createUser() {
    document.querySelector('.signUpBtn').addEventListener('click', makeUser);
}

