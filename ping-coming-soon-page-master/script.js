const form = document.querySelector('#form');
const inputEmail = document.querySelector('#email');
const error = document.querySelector('#error');

form.addEventListener('submit', e => checkInputForm(e));

function checkInputForm(e){
    e.preventDefault();
    if(!validateEmail(inputEmail.value)){
        inputEmail.classList.add('invalid');
        error.classList.remove('hidden');
    } else {
        inputEmail.classList.remove('invalid');
        error.classList.add('hidden');
    }
}

function validateEmail(email){
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}