const refs = {
  inputCountEl: document.querySelector('#controls, input'),
  divBoxesEL: document.querySelector('#boxes'),
  btnCreateEl: document.querySelector('button[data-action="create"]'),
  btnDestroyEl: document.querySelector('button[data-action="destroy"]'),
};

refs.btnCreateEl.addEventListener('click', createBoxes);
refs.btnDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes(event) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const inputValue = document.querySelector('input').value;
  for (let i = 0; i < inputValue; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = 30 + 10 * i + 'px';
    newBox.style.height = 30 + 10 * i + 'px';
    newBox.style.backgroundColor = getRandomHexColor();
    refs.divBoxesEL.append(newBox);
  }
}

function destroyBoxes() {
  refs.divBoxesEL.innerHTML = '';
}
