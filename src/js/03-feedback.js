import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const localStorageKey = 'feedback-form-state';

const formData = {};

form.addEventListener('submit', throttle(onSubmit, 200));
form.addEventListener('input', throttle(onInput, 200));

populateTextarea();

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();

  console.log({ email: email.value, message: message.value });
  evt.currentTarget.reset();
}

function populateTextarea() {
  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };

  const savedMessage = load(localStorageKey);
  if (savedMessage) {
    email.value = savedMessage.email;
    message.value = savedMessage.message;
  }
}
