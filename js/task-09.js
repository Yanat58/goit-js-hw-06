
const box = document.querySelector('.widget');
const btn = document.querySelector('.change-color');
const textColor = document.querySelector('.color');


btn.addEventListener('click', onChangeColorsClick);
function onChangeColorsClick() {

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
   
};
const colors = getRandomHexColor();
  box.style.backgroundColor = `${colors}`;
  textColor.textContent =  `${colors}`;
};


