const refs = {
  inputUserName: document.querySelector('#name-input'),
  greetingUserName: document.querySelector('#name-output'),
};

function nameHandler() {
  if (refs.inputUserName.value === '') {
    return (refs.greetingUserName.textContent = 'Anonymous');
  }
  return (refs.greetingUserName.textContent = refs.inputUserName.value);
}

refs.inputUserName.addEventListener('input', nameHandler);
