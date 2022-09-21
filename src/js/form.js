'use strict';
import throttle from 'lodash.throttle';
const formRef = document.querySelector('.js-contact-form');
const LOCALE_STORAGE_KEY = 'contact-form-key';
import { save, load, remove } from './storage';

initPage();

const onFormInput = event => {
  const { name, value } = event.target;

  let saveData = load(LOCALE_STORAGE_KEY);
  saveData = saveData ? saveData : {};

  saveData[name] = value;

  save(LOCALE_STORAGE_KEY, saveData);
};

const throttledOnFormInput = throttle(onFormInput, 300);
formRef.addEventListener('input', throttledOnFormInput);

function initPage() {
  const saveData = load(LOCALE_STORAGE_KEY);

  if (!saveData) {
    return;
  }
  Object.entries(saveData).forEach(([name, value]) => {
    formRef.elements[name].value = value;
  });
}

const handleSubmit = event => {
  event.preventDefault();

  const {
    elements: { name, email, message },
  } = event.currentTarget;

  console.log({ name: name.value, email: email.value, message: message.value });
  event.currentTarget.reset();
  remove(LOCALE_STORAGE_KEY);
};

formRef.addEventListener('submit', handleSubmit);
