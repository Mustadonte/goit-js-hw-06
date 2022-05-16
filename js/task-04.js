const refs = {
  textValue: document.querySelector('#value'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
};
let counterValue = 0;

function incrementValue() {
  counterValue += 1;
  refs.textValue.textContent = counterValue;
}

function decrementValue() {
  counterValue -= 1;
  refs.textValue.textContent = counterValue;
}

refs.incrementBtn.addEventListener('click', incrementValue);
refs.decrementBtn.addEventListener('click', decrementValue);
