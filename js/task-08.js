
const form = document.querySelector('.login-form');
const formInputs = document.querySelectorAll('input');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
        
    const formElements = event.currentTarget.elements;

    const emailInput = formElements.email.value;
    const passwordInput = formElements.password.value;

    formInputs.forEach(function (input) {
        if (input.value === '') {
            alert('Все поля должны быть заполнены');    
                }  
        }) 

        if (emailInput !== '' && passwordInput !== '') {
            form.reset();
        console.log('email:', emailInput);
        console.log('password:', passwordInput);
        }
}

// const form = document.querySelector('.login-form');
// const formInputs = document.querySelectorAll('input');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   const formElements = event.currentTarget.elements;
//   const emailInput = formElements.email.value;
//   const passwordlInput = formElements.password.value;
        
//   if (emailInput === '' || passwordlInput === '') {
//     return alert('Все поля должны быть заполнены');
//   }
//   console.log('email:', emailInput);
//   console.log('password:', passwordlInput);
//   form.reset();
// }
