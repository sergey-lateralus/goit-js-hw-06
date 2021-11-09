const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

const value = document.getElementById("value");
let counterValue = 0;

const increment = () => (value.textContent = counterValue += 1);
const decrement = () => (value.textContent = counterValue -= 1);

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);