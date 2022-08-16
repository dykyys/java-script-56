/*
 * Стрілки, явне - неявне повернення, arguments, повернення об'єкта
 */

// function sum(a, b) {
//   return a + b;
// }

// const sum = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => a + b;
// console.log(add);
// console.log(sum(3, 7));

// console.log(sum(10, 20));

//? Два і більше параметрів

// const calc = (a, b) => {
//   console.log(a + b);
// };

// calc(10, 20);

//? Один параметр

// const greet = username => {
//   console.log(`Hello ${username}!`);
// };

// greet('Jeremiah Jennings');

//? Без параметрів

// const greet = function () {
//     console.log('Hello!');
// };
// const greet = () => {
//   console.log('Hello!');
// };
// greet();

//? arguments

// const calc = (...args) => {
//   let total = 0;

//   args.forEach((number) => (total += number));
//   console.log(total);
// };

// calc(1, 8, 9, 9, 45);

//? Повернення об'єкту

// 1 варіант
// const createObj = (obj) => {
//   return {
//     ...obj,
//     id: Date.now(),
//   };
// };

// const newObj = createObj({ name: '🍎', price: 30, quantity: 3 });
// console.log(newObj);

// 2 варіант
// const createObj = (obj) => ({
//   ...obj,
//   id: Date.now(),
// });
// const newObj = createObj({ name: '🍎', price: 30, quantity: 3 });
// console.log(newObj);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// const createProduct = (partialProduct, callback) => {
//   //   const product = { id: Date.now(), ...partialProduct };
//   callback({ id: Date.now(), ...partialProduct });
// };

// Було
// const logProduct = function (product) {
//   console.log(product);
// };

//Стало

// const logProduct = (product) => console.log(product);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// const numbers = [1, 2, 3, 4, 5];

// const each = function (array, callback) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const elem = callback(array[i]);
//     newArray.push(elem);
//   }

//   return newArray;
// };

// const addNumbers = each(numbers, (number) => number + 21);
// console.log(addNumbers);

/* ownForEach */

// const numbers = [1, 2, 3, 4, 5];

// const each = function (array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//   }
// };

// each(numbers, (element, index, array) => {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

// numbers.forEach((element, index, array) => {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

// Задача № 41. Як саме солоденьке на самий кінець на прохання навчаючихся))
// Умова:
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками.
// Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі.
// В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.

// Початковий код:
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     console.log(potionName);

//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.addPotion({ name: 'Speed potion', price: 460 }));
// atTheOldToad.addPotion({ name: 'Speed', price: 45 });
// console.log(atTheOldToad.removePotion('Speed'));

// console.log(
//   atTheOldToad.updatePotionName('Speed potion', 'Speed potion super')
// );
// console.log(atTheOldToad.getPotions());

// const mango = function (shefName, dish) {
//   console.log(`${shefName} cooking ${dish}!`);
// };

// const polly = function (shefName, dish) {
//   console.log(`${shefName} cooking ${dish}!`);
// };

// const shefName = function (name) {
//   return function (dish) {
//     console.log(`${name} cooking ${dish}!`);
//   };
// };

// const mango = shefName('Mango');
// //  function (dish) {
// //     console.log(`${name} cooking ${dish}!`);
// //   }
// const polly = shefName('Polly');
// console.log(mango);
// mango('tea');
// mango('супік');
// mango('пиріжок');
// polly('пиріжочок');
