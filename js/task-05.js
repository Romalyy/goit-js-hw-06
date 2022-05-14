
const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');


inputName.addEventListener('input', inputValue);

function inputValue(event) {
    console.log(event.currentTarget.value);
    spanName.textContent = event.currentTarget.value;
    if (inputName.value === '') {
        spanName.textContent = 'Anonymous';
    } else{
        spanName.textContent = inputName.value;
    }
}