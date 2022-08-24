'use strict';
/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

// прототип - це резервне сховище властивостей і методів об'єкта

//* Власні та не власні властивості об'єкта
//Метод obj.isPrototypeOf(obj2)

const user = {
  name: 'Mango',
  age: 21,
};
//при створенні об'єкта визивається new Object іна прототипі буде Object.prototype

const userDeveloper = Object.create(user);
//на прототипі буде об'єкт user

user.email = 'mango@gmail.com';

userDeveloper.skill = 'react';
// userDeveloper.age = 27;

// console.log(userDeveloper.__proto__);

// console.log('user is prototype', user.isPrototypeOf(userDeveloper));

//* Перевірка приватних властивостей obj.hasOwnProperty()
//* Цикл for...in, перебирає всі властивості, власні та успадковані.

// for (const key in userDeveloper) {
//   if (userDeveloper.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

//Object.keys повертає масив власних ключів

const keys = Object.keys(userDeveloper);

// for (const key of keys) {
//   console.log(userDeveloper[key]);
// }
