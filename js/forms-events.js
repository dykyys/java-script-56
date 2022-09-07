'use strict';
/*
 *Події елементів форм. focus, blur, change, input, submit
 */

// {
//     name: 'Mango'
//     email: 'mango@gmail.com'
//  }

const formRef = document.querySelector('.js-contact-form');
const inputListRef = document.querySelectorAll('.js-username-input');
const policyInputRef = document.querySelector('.js-policy-checkbox');
const btnFormRef = document.querySelector('.js-contact-form-submit');
const inputNameRef = document.querySelector('[name="name"]');
const outputRef = document.querySelector('.js-username-output');

const handleSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { name, email },
  } = event.currentTarget;

  if (name.value === '' || email.value === '') {
    alert('Заповніть всі поля!');
    return;
  }

  const userData = {
    name: name.value,
    email: email.value,
  };
  console.log(userData);
};
formRef.addEventListener('submit', handleSubmit);

const onInputFocus = (event) => {
  console.log('focus');
  console.log(event.target);
  event.target.classList.add('focus');
};

const inputBlur = (event) => {
  const { dataset, value } = event.target;
  const requiredLength = Number(dataset.length);

  event.target.classList.remove('focus');

  if (requiredLength === value.length) {
    changeClass('valid', 'invalid', event.target);
  } else {
    changeClass('invalid', 'valid', event.target);
  }
};

function changeClass(add, remove, elem) {
  elem.classList.add(add);
  elem.classList.remove(remove);
}

inputListRef.forEach((input) => {
  input.addEventListener('blur', inputBlur);
  input.addEventListener('focus', onInputFocus);
});

const onPolicyChange = (event) => {
  const { checked } = event.target;

  btnFormRef.disabled = !checked;
};

policyInputRef.addEventListener('change', onPolicyChange);

const handleInputName = (event) => {
  const { value } = event.target;
  outputRef.textContent = value ? value : 'Anonimys';
};
inputNameRef.addEventListener('input', handleInputName);
