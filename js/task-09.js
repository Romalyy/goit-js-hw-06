
const span = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

const symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];


changeColorButton.addEventListener('click', () => {
  let hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  span.textContent = hexColor
});


function getRandomHexColor () {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function generateHex() {
  let hexColor = '#';
  for (let i = 0; i < 6; i = + 1) {
    hexColorValue += symbols[getRandomHexColor()];
    return hexColor;
  }
}

