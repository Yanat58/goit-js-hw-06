const divRef = document.querySelectorAll("#counter");
console.log(divRef);

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
console.log(decrementButton);

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const spanRef = document.querySelector("#value");

let counterValue = 0;

incrementButton.addEventListener("click", onButtonIncrementClick);
function onButtonIncrementClick() {
  counterValue += 1;
  spanRef.textContent = `${counterValue}`;
}

decrementButton.addEventListener("click", onButtonDecrementClick);
function onButtonDecrementClick() {
  counterValue -= 1;
  spanRef.textContent = `${counterValue}`;
}
