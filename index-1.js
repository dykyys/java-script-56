'use strict';
/*
 * Колбеки, функції вищого порядку
 */

// const foo1 = function (callback) {
//   callback();
// };

// const foo = function () {
//   console.log('hi');
// };

// // const callback = foo;

// foo1(foo);

//? Реєстрація подій на сторінці
// const btnRef = document.querySelector('.js__btn');

// const logger = function () {
//   console.log('hi');
// };

// btnRef.addEventListener('click', logger);

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колбека.
*/

// const numbers = [1, 2, 3, 4, 5];

// const each = function (array, callback) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const elem = callback(array[i], 100);
//     newArray.push(elem);
//   }

//   return newArray;
// };

// const add = function (number) {
//   return number + 21;
// };

// const multi = function (number, value) {
//   return number * value;
// };

// const addNumbers = each(numbers, add);
// console.log('addNumbers', addNumbers);

// const multiNumbers = each(numbers, multi);
// console.log('multiNumbers', multiNumbers);

// console.log('numbers', numbers);

/*
? Напишіть такі функції:
? registerGuest(name, callback) - приймає ім'я гостя, а також колбек.
? Функція registerGuest виводить повідомлення, що гостя зарестровано і визиває
? callback
? Функція greet(name) ( вона ж callback)  об'являє в параметрах ім'я і
? виводить в консоль `Ласкаво просимо ${name}.`
*/

// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// function registerGuest(name, callback) {
//   console.log(callback);
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
//   //   console.log(callback === greet);
// }

// registerGuest('Mango', function (name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

/*array.forEach(element => {

}); */

//break , continue всередині forEach не працюють
// роботу forEach перервати неможливо, масив буде перебраний до кінця

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (elem, idx, arr) {
//   console.log('number', number);
//   console.log('index', index);
//   //   console.log('array', array);
// });
// console.log(numbers);
