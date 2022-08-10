'use strict';
/*
 * Деструктуризація об'єктів
 */

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   hits: [],
// };

/*
? Напишіть деструктуруюче привласнення, яке:
? Властивості firstName присвоє змінну firstName.
? властивості age привласнить змінну userAge.
? властивості isAdmin присвоє змінну isAdmin (false, якщо немає такої властивості)
// */

// const {
//   firstName,
//   lastName,
//   age: userAge = 18,
//   hits: images,
//   isAdmin = false,
// } = user;

// if(isAdmin === undefined){ isAdmin = false}

// console.log(firstName);
// console.log(lastName);
// console.log(userAge);
// console.log(images);
// console.log(isAdmin);

/*
 * Глибока деструктуризація об'єктів
 */

// const team = {
//   number: 4,
//   //   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'pl',
//   },
// };
// const defaultImg =
//   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

// const {
//   number,
//   employees,
//   flag = defaultImg,
//   langs: { original: originLang = 'en', secondary: secondLangs = 'en' },
// } = team;
// console.log(flag);
// console.log(number);
// console.log(employees);
// console.log(originLang);
// console.log(secondLangs);

/*
 * Деструктуризація масивів
 */

// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// const [user1, , , qwe, user5] = names;

// const [user1, , , user2] = names;
// const user3 = names[0];

// console.log(user1);
// console.log(user2);
// console.log(qwe);
// console.log(user5);

// const rgb = [24, 56, 98];

// const [red = 0, green = 0, blue = 0] = rgb;

// const [red = 0, green = 0, blue = 0] = rgb;

// console.log('red: ', red);
// console.log('green: ', green);
// console.log('blue: ', blue);

/*
? У нас є об'єкт salaries із зарплатами:
? Створіть функцію topSalary(salaries), яка повертає
? ім'я працівника з найбільшою заробітною плантею.
? Якщо об'єкт salaries порожній, потрібно повернути null.
? Якщо кілька високооплачуваних працівників, можна повернути будь-кого з них.
? P.S. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.
*/

const salaries = {
  John: 100,
  Pete: 3000,
  Mango: 2500,
};

// console.log(Object.entries(salaries));

// [
//   ['John', 100],
//   ['Pete', 300],
//   ['Mary', 2500]
// ]

// const topSalaries = function (salaries) {
//   const salaryArr = Object.entries(salaries);

//   //   const firstEl = salaryArr[0];

//   let topSalary = salaryArr[0][1];
//   let topDev = salaryArr[0][0];

//   for (const [name, value] of salaryArr) {
//     // const [name, value] = elem;

//     if (value > topSalary) {
//       topSalary = value;
//       topDev = name;
//     }
//   }
//   console.log(topDev);
//   console.log(topSalary);
// };

// topSalaries(salaries);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   console.log(propName);
//   const values = [];
//   for (const product of products) {
//     console.log(product[propName]);
//     if (product[propName]) {
//       values.push(product[propName]);
//     }
//   }
//   console.log(values);
//   return values;
// }

// getAllPropValues('name');

// function logValues({
//   name = 'Some name',
//   price = 0,
//   quantity = 0,
//   onSale = false,
// }) {
//   console.log(name);
//   console.log('price', price);
//   console.log(quantity);
//   console.log(onSale);
// }

// logValues({ name: 'Grip', quantity: 200, onSale: true, price: 2500 });

function findMatches(arr, ...args) {
  const newArr = [];
  for (const elem of arr) {
    if (args.includes(elem)) {
      newArr.push(elem);
    }
  }

  console.log(newArr);
}

findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
