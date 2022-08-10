'use strict';

/*
 * Операція spread як заміна concat та slice
 */

//*  Копія масива
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = numbers.slice();

// const numbers2 = [...numbers];

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);
// console.log(numbers === numbers2);

// numbers2[0] = 10;

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

// //* Об'єднання масивів
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [10, 9, 8, 7];

// const allNumbers = numbers.concat(numbers2);

// const allNumbers = [...numbers, ...numbers2];

// console.log(allNumbers);

//* Розпилення масиву у функцію
// const numbers = [1, 2, 3, 4, 5];

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

/*
 * Операція spread як заміна Object.create()
 */

// const animal = {
//   legs: 4,
// };

// const cat = Object.create(animal);
// cat.name = 'Kiwi';

// console.log('cat', cat);

//https://lodash.com/docs/4.17.15#cloneDeep

// const newCat = _.cloneDeep(cat);

// const newCat = { ...cat };

// console.log('newCat', newCat);

// console.log(cat === newCat);

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };

// const user2 = { ...user };

// console.log('user: ', user);
// console.log('user2: ', user2);
// console.log(user === user2);

// user2.firstName = 'Birdie';
// console.log('---------------------');
// console.log('user: ', user);
// console.log('user2: ', user2);

//* Розпилення складних типів

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };

// const user2 = _.cloneDeep(user);

// const user2 = { ...user };

// console.log('user: ', user);
// console.log('user2: ', user2);
// console.log(user === user2);

// user2.someArr.push(10);

// console.log('user: ', user);
// console.log('user2: ', user2);

/*
 * Операція rest
 */

// const numbers = [6, 7, 8]; const newNumbers = [...numbers];
// function foo(...args) {console.log(args);} foo(1, 2, 3);

//? Напишіть функцію sum, яка додає довільну кількість аргументів які більше вказаного числа

// const sum = function (num, ...args) {
//   let total = 0;
//   for (const number of args) {
//     if (number > num) {
//       total += number;
//     }
//   }
//   return total;
// };

// const totalValue = sum(8, 6, 7, 8, 9, 12, 8);
// console.log(totalValue);
