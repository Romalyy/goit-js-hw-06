const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");
const incrementSpan = document.querySelector("#value");

// console.log(decrementButton);
// console.log(incrementSpan);
// console.log(incrementButton);

let counterValue = 0;

const decrement = () => { 
    counterValue -= 1;
    incrementSpan.textContent = counterValue;
};
decrementButton.addEventListener("click", decrement);

const increment = () => { 
    counterValue += 1;
    incrementSpan.textContent = counterValue;
};
incrementButton.addEventListener("click", increment);

