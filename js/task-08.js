const refs = {
  formEl: document.querySelector('form.login-form'),
};
refs.formEl.addEventListener('sumbit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  console.dir(event.currentTarget.elements);
}
