const formEl = document.querySelector(`.feedback-form`);
const inputEl = document.querySelector(`input[name="email"]`);
const messageEl = document.querySelector(`textarea[name="message"]`);
const LOCALSTORAGE_KEY = 'feedback-form-state';

const _ = require('lodash');

data = {
  email: ``,
  message: ``,
};

const saveCurrentData = () => {
  data.email = inputEl.value;
  data.message = messageEl.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};

formEl.addEventListener('input', _.throttle(saveCurrentData, 500));

const fillInput = () => {
  const parsedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (parsedData) {
    inputEl.value = parsedData.email;
    messageEl.value = parsedData.message;
  } else {
    inputEl.value = '';
    messageEl.value = '';
  }
};
fillInput();

const handleSubmit = event => {
  event.preventDefault();
  event.currentTarget.reset();
  saveCurrentData();
};

formEl.addEventListener('submit', handleSubmit);
