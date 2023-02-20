const refs = {
  input: document.querySelector('#name-input'),
  nameSpan: document.querySelector('#name-output'),
};
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  // console.log(event.target.value);
  refs.nameSpan.textContent = event.target.value;
  if (event.target.value.trim() === '') {
    refs.nameSpan.textContent = 'Anonymous';
  }
}
