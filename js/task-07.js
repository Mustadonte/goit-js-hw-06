const refs = {
  inputSize: document.querySelector('#font-size-control'),
  inputText: document.querySelector('#text'),
};
function fontSizeHandler() {
  refs.inputText.style.fontSize = refs.inputSize.value + 'px';

refs.inputSize.addEventListener('input', fontSizeHandler)
