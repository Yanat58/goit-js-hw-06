function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

btn.addEventListener("click", onChangeColorsClick);

function onChangeColorsClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}
