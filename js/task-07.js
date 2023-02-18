const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
inputRef.addEventListener("input", onInputRef);

function onInputRef(event) {
  console.log(event.currentTarget.value);
  const size = event.currentTarget.value;
  textRef.style.fontSize = `${size}px`;
}
