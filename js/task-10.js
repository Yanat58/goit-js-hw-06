function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divRef = document.querySelector('#controls');
const inputRef = document.querySelector('input');

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const creatBoxesRef = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);

let amount;
const allBoxes = [];

function createBoxes() {
  amount = Number(inputRef.value);

  for (let i = 1; i <= amount; i += 1) {
    let divRef = document.createElement('div');
    divRef.classList.add('new-div');
    divRef.style.width = 20 + `${i}` * 10 + `px`;
    divRef.style.height = 20 + `${i}` * 10 + `px`;
    divRef.style.backgroundColor = getRandomHexColor();

    allBoxes.push(divRef);
    console.log(allBoxes);
  }
  creatBoxesRef.append(...allBoxes);
}

destroyBtn.addEventListener('click', ondestroyBoxes);
function ondestroyBoxes() {
  allBoxes.length = 0;
  inputRef.value = '';
  creatBoxesRef.innerHTML = '';
}
