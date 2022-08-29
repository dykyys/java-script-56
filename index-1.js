'use strict';

// const tags = ['premium', 'promoted', 'top'];
// console.log(tags[tags.length - 1]);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// console.log(apartment.tags[apartment.tags.length - 1]);

//1 при оголошенні const обов'язково потрібно вказати значення
//при оголошенні let без вказаного значення змінна ініціалізується значенням undefined
//2 змінну оголошену за допомогою const не можна перезаписати

// const user = 'Mango';

// user = 'Kiwi';

// console.log(user);

// let a;
// console.log(a);

// console.log(user);

// var user = 'Mango';

// console.log(user);

// const userData = {
//   name: 'Mango',
//   email: 'mango@gmai.com',
//   message: 'hello world',
// };

// // const keys = Object.keys(userData);
// // keys.forEach((key) => console.log(`${key} - ${userData[key]}`));

// const keys = Object.entries(userData);

// keys.forEach(([key, value]) => console.log(`${key} - ${value}`));

// const carObj = cars.reduce((acc, car) => {
//   return { ...acc, [car.model]: { ...car } };
// }, {});
// console.log(carObj);

const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Необходимо заполнить все поля!');
    return;
  }

  //для більш складниї форм
  // const formData = new FormData(formRef);
  // formData.forEach((name, value) => {
  //   console.log(name);
  //   console.log(value);
  // })

  const userData = {
    email: email.value,
    password: password.value,
  };

  console.log(userData);

  event.currentTarget.reset();
});
