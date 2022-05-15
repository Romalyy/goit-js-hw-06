
const validationInput = document.querySelector('#validation-input');
const inputLength = validationInput.dataset.length;

validationInput.addEventListener('blur', inputValidation);


function inputValidation() {
    if (validationInput.value.length === Number(inputLength)) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    }   else {
            validationInput.classList.remove('valid');
            validationInput.classList.add('invalid');
        }
}

