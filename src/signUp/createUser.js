const axios = require('axios').default;

function makeUser() {
    axios.post('http://localhost:5000/users', {
        "username": document.querySelector('.login').value,
        "password": document.querySelector('.password').value,
        "email": document.querySelector('.email').value
    })
    .then(function (response) {  
       alert(response.data.details)
    })
    .catch(function (error) {
        console.log(error)
    });
}

export function createUser() {
    document.querySelector('.signUpBtn').addEventListener('click', makeUser);
}

