
const sliderInput = document.querySelector('#font-size-control');
const spanTextSize = document.querySelector('#text');

sliderInput.addEventListener('input', changeTextSize);

function changeTextSize(event) {
    spanTextSize.style.fontSize = event.currentTarget.value + 'px';
}
