const refs = {
  input: document.querySelector('#name-input'),
  nameSpan: document.querySelector('#name-output'),
};
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.nameSpan.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    refs.nameSpan.textContent = 'Anonymous';
  }
}
