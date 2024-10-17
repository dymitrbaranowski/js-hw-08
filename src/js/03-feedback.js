import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
// console.dir(form);

const formData = {};

form.addEventListener('submit', throttle(onSubmit, 200));
form.addEventListener('input', throttle(onInput, 200));

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function onSubmit(evt) {}
