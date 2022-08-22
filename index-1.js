'use strict';
/*
 *  Контекст виклику this
 */

/*
 * this існує тільки всередині функцій.
 * На контекст НЕ впливає те, де функція була //! ОГОЛОШЕНА.
 * На контекст впливає те де функція //! ВИКЛИКАЄТЬСЯ.
 * Якщо функція викликається в контексті об'єкта, this посилається на цей об'єкт
 * Якщо функція викликається без контекста this --> undefined
 * При передачі функції як callback контекст не зберігається
 * this  в стрілочних функціях посилається на батьківський this:
 *  - якщо стрілочна функція викликається без контексту або в контексті об'єкта, this --> window
 *  - якщо стрілочна функція оголошена в серередині функції (не стрілочної) this стрілочної функції буде посилатися на батьківський this
 */

//TODO: Розглянемо як this поводиться в методах

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     // this = user;
//     console.log('this ----> ', this);
//     console.log('user ----> ', user);
//   },

//   showName() {
//     // this = user;
//     console.log(this.name);
//   },
// };

// user.showThis();
// user.showName();

// const anotherUser = {
//   name: 'Barry',
//   age: 20,

//   showThis() {
//     // this = user;
//     console.log('this ----> ', this);
//   },

//   showName() {
//     // this = user;
//     console.log(this.name);
//   },
// };

// anotherUser.showThis();
// anotherUser.showName();

//TODO: Розглянемо як this поводиться у звичайних функціях (суворий, не суворий режим)

// const fn = function () {
//   console.log(`this ---->`, this);
// };

// fn();

//? Function declaration
// function fn() {
//   console.log(`this ---->`, this);
// }

// fn();

//? Arrow function
// const fn = () => {
//   console.log(`this ---->`, this);
// };

// fn();

//TODO: Присвоєння функції як методу об'єкту

// const showThis = function () {
//   // this = user;
//   console.log(`this ----> `, this);
// };

// showThis();

// const showThisName = function () {
//   // this = user;
//   console.log(`this name is: ${this.name}`);
// };

// const user = {
//   name: 'Luis',
//   age: 30,
// };
// const user2 = {
//   name: 'mango',
//   age: 21,
// };

// user.showThis = showThis;
// user.showThis();

// user.showThisName = showThisName;
// // user.showThisName();

// user2.showThis = showThis;

// user2.showThisName = showThisName;
// user2.showThis();

//TODO: Виклик методу об'єкта без контексту

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// user.showThis();
// user.showName();

// const showUserThis = user.showThis;
// const showUserName = user.showName;

// showUserThis();
// showUserName();

//TODO: This в callback функціях

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// user.showName();

// const someFunction = function (callback) {
//   //   console.log(this);
// //   console.log(callback === user.showThis);
//   callback();
// };

// someFunction(user.showThis);

//TODO: this у стрілочних функціях. Стрілочні функції не мають свого this, this у стрілочних функціях завжди посилається на батьківський this.
// const user = {
//   name: 'Luis',
//   age: 30,

//   changeAge: (newAge) => {
//     console.log(`this ---->`, this);
//     // console.log(this.age);
//   },
// };

// user.changeAge();
// console.log(user);

/*
? Яким буде результат виконання цього коду?
*/

// let user = {
//   name: 'Джон',

//   go() {
//     console.log(this);
//     // console.log(this.name);
//     const arrow = () => console.log('this in arrow function', this);
//     arrow();
//   },
// };
// user.go();
// const goFn = user.go;

// goFn();

/*
? Тут функція makeUser повертає об'єкт.
? Яким буде результат при зверненні до об'єкта ref? Чому?
*/

// const user = {
//   name: 'Luis',
//   age: 30,
//   makeUser() {
//     return {
//       name: 'Mango',
//       ref: this,
//     };
//   },
// };
// console.log(user.ref);

// const makeUser = function () {
//   console.log(this);
//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const mango = user.makeUser();
// console.log(mango);

// const mango = makeUser();
// console.log(mango);
/*
? Яким буде результат console.log
*/

// function makeUser() {
//   return {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   }

// console.log(user);
// console.log(user.name);
// console.log(user.ref());
// console.log(user.ref().name);
