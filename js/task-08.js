const refs = {
  formEl: document.querySelector('form.login-form'),
};
refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Заповність всі поля');
  }
  console.log({
    email: formElements.email.value,
    password: formElements.password.value,
  });
  event.currentTarget.reset();
}
