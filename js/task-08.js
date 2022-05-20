
const form = document.querySelector('.login-form');
const formInputs = document.querySelectorAll('input');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
        event.preventDefault();
        
        const formElements = event.currentTarget.elements;

        const emailInput = formElements.email.value;
        const passwordInput = formElements.password.value;
        
        const formData = {
                emailInput,
                passwordInput,
        }
        
        console.log(formData);
        console.log(emailInput, passwordInput);

        const formInputsValue = formInputs.forEach(function (input) {
                if (input.value === '') {
                        alert('Все поля должны быть заполнены');    
                }
                
                
        })  
        if (formInputsValue !== '') {
                form.reset();
        }
}


