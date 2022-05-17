const refs = {
  bodyEl: document.querySelector('body'),
  btnEl: document.querySelector('.change-color'),
  colorName: document.querySelector('.color'),
};

refs.btnEl.addEventListener('click', changeColorHandler);

function changeColorHandler() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  refs.colorName.textContent = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = refs.colorName.textContent;
}
