'use strict';
/*
 *  Метод filter()
 */

// масив.filter((element, index, array) => {
// Тіло колббек-функції
// });

/*
? Відфільтруйте масив, щоб залишилися тільки парні
*/

// const numbers = [1, 2, 3, 4, 5, 6];

// const filteredNumbers = numbers.filter((number) => {
//   if (number % 2 === 0) {
//     return true;
//   }
// });

// const filteredNumbers = numbers.filter((number) => number % 2 === 0);

// console.log(filteredNumbers);

/*
? Відфільтруємо масив, залишивши в ньому лише додатні числа:
*/

// const numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

// const positiveNumbers = numbers.filter((number) => {
//   if (number > 0) {
//     return true;
//   }
// });

// const positiveNumbers = numbers.filter((number) => number > 0);

// console.log(positiveNumbers);

/*
? Нехай функція filterByPrice повертає масив автомобілів ціна яких
? менше ніж значення параметра threshold.
*/

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const filterByPrice = (car, threshold) => {
//   return car.filter((car) => {
//     return car.amount > threshold;
//   });
// };
// console.table(filterByPrice(cars, 12));

// const filterByPrice = (car, threshold) => {
// return car.filter(({ price }) => price > threshold);
// };
// console.table(filterByPrice(cars, 25000));

// ?Залишити тільки унікальні числа
const numbers = [1, 2, 3, 3, 2, 1, 4, 5, 6, 4];

// 1 ітерація
// el = 1; idx = 0;
// 0 === 0

// 2 ітерація
// el = 2; idx = 1;
// 1 === 1

// 3 ітерація
// el = 3; idx = 2;
// 2 === 2

// 4 ітерація
// el = 3; idx = 3;
// 2 === 3

// 5 ітерація
// el = 2; idx = 4;
// 1 === 4

const filteredNumbers = numbers.filter(
  (number, index, array) => array.indexOf(number) === index
);

console.log(filteredNumbers);
