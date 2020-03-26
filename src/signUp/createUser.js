import { serviceInactive } from '../common/serviceInactive';


const axios = require('axios').default;

function makeUserRequest(login, password, email) {
    axios.post('http://localhost:5000/users', {
        "username": login,
        "password": password,
        "email": email
    })
    .then(function (response) {  
       alert(response.data.details);
       location.reload();
    })
    .catch(function (error) {
        document.querySelector('.signUpDiv').innerHTML = '';
        document.querySelector('.signUpDiv').append(serviceInactive());
    });
}

function makeUser() {
    const login = document.querySelector('.login').value;
    const password = document.querySelector('.password').value;
    const confirmPassword = document.querySelector('.confirmPassword').value;
    const email = document.querySelector('.email').value;

    if (!login || !password || !confirmPassword || !email){
        alert('Fill up all fields');
        return;
    } else if (confirmPassword !== password) {
        alert('Different passwords');
        return;
    }

    makeUserRequest(login, password, email);
}

function acceptPolicy() {
    const privacyCheckobox = document.querySelector('#privacyCheckobox');
    const signUpBtn = document.querySelector('.signUpBtn');
    if (privacyCheckobox.checked === true) {
        signUpBtn.removeAttribute('disabled');
    } else {
        signUpBtn.setAttribute('disabled', true);
    }
}


export function createUser() {
    document.querySelector('.signUpBtn').addEventListener('click', makeUser);
    document.querySelector('#privacyCheckobox').addEventListener('change', acceptPolicy);
}

