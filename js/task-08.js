
const form = document.querySelector('.login-form');
const formInput = document.querySelectorAll('input');
// // console.log(form);
// // console.log(formInput);
// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
//     // const formElements = event.currentTarget.elements;

//     if (formInput.currentTarget.elements.subscription.value === '') {
//         alert('Все поля должны быть заполнены');
// }
// }


function onFormSubmit ( )
{
	valid = true;

        if ( document.form.formInput.value == "" )
        {
                alert ( "Пожалуйста заполните поле 'Ваше имя'." );
                valid = false;
        }

        return valid;
}

