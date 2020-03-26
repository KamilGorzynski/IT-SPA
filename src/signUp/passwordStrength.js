
export function checkPasswordStrength() {
    const password_value =  document.querySelector('.password').value;


    // Reg exp checking
    const isUpperCase = (string) => /^[A-Z]*$/.test(string)
    const isDigit = (string) => /^\d*$/.test(string)
    const isPunctuation = (string) => /^[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]$/.test(string)

    let hasUpperCase = false;
    let hasDigit = false;
    let hasPunctuation = false;
    
    for (let i in password_value) {
        if (isUpperCase(password_value[i])) {
            hasUpperCase = true;
        } else if (isDigit(password_value[i])) {
            hasDigit = true;
        }else if (isPunctuation(password_value[i])) {
            hasPunctuation = true;
        }else {
            continue;
        }
    }
    const passwordStrength = document.querySelector('#passwordStrength');
    

    if (hasPunctuation && hasDigit && hasUpperCase && password_value.length > 9) {
        passwordStrength.innerHTML = 'Strong';
        passwordStrength.style.color = '#00802b';       
    } else if (hasUpperCase && hasDigit && password_value.length > 6) {
        passwordStrength.innerHTML = 'Moderate';
        passwordStrength.style.color = '#e65c00';
    } else if (password_value) {
        passwordStrength.innerHTML = 'Week';
        passwordStrength.style.color = 'red';
    } else {
        passwordStrength.innerHTML = '';
    }
}