/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

//TODO: Через for...in

// let total = 0;

// for (const key in salaries) {
//   total += salaries[key];
// }

// console.log(total);

//TODO: Через Object.keys();

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let total = 0;

// const salariesKeys = Object.keys(salaries);

// for (const key of salariesKeys) {
//   total += salaries[key];
// }

// console.log(total);

//TODO: Через Object.values();

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let total = 0;

// const valuesSalaries = Object.values(salaries);

// for (const salary of valuesSalaries) {
//   total += salary;
// }

// console.log(total);

// const obj = {
//   a: 1,
//   b: 2,
// };

// const obj1 = Object.create(obj);
// obj1.c = 10;

// for (const key in obj1) {
//   if (obj1.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let total = 0;
const developersSalaaries = Object.create(salaries);

developersSalaaries.Obivan = 200;
developersSalaaries.Yoda = 500;
developersSalaaries.Chybaka = 50;
developersSalaaries.DartVaider = 250;

// console.log(developersSalaaries);

// for (const key in developersSalaaries) {
//   if (developersSalaaries.hasOwnProperty(key)) {
//     total += developersSalaaries[key];
//   }
// }
// console.log(total);

// const devSalariesKeys = Object.keys(developersSalaaries);

// for (const key of devSalariesKeys) {
//   total += developersSalaaries[key];
// }

// console.log(total);

// function foo(...args) {
//   console.log(args);
// }
// foo(1, 3, 5, 34, 8, 9);

// const numbers = [23, 5, 34, 8, 9];
// console.log(Math.min(...numbers));

// const entries = Object.entries(developersSalaaries);
// for (const arr of entries) {
//   console.log(arr[0]);
//   console.log(arr[1]);
//   console.log('---');
// }
