const refs = {
  inputEl: document.querySelector('#validation-input'),
  inputDataLength: document.querySelector('input[data-length]'),
};

function validationHandler() {
  if (refs.inputEl.value.length === Number(refs.inputEl.dataset.length)) {
    refs.inputEl.classList.add('valid');
    refs.inputEl.classList.remove('invalid');
  } else {
    refs.inputEl.classList.add('invalid');
    refs.inputEl.classList.remove('valid');
  }
}

refs.inputEl.addEventListener('blur', validationHandler);
