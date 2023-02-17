const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputRefBlur);
function onInputRefBlur(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
  }
};

inputRef.addEventListener('focus', onInputRefFocus);
function onInputRefFocus() {
  if (inputRef.classList.contains('invalid')) {
    inputRef.classList.remove('invalid')
  }
}  
  

