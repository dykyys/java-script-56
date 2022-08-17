/*
 *  Метод map()
 */

// масив.map((element, index, array) => {
//  Тіло колббек-функції
// });

//? Помножте всі числа на 2
// const numbers = [1, 2, 3, 4, 5];

// // const multiNumbers = numbers.map((number) => {
// //   return number * 5;
// // });

// const multiNumbers = numbers.map((number) => number * 5);

// console.log('multiNumbers', multiNumbers);

// console.log('numbers', numbers);

/*
?Перепишіть цикл через map
? Код нижче отримує з масиву рядків новий масив, що містить довжини рядків:
*/

// const wordsArr = ['Існує', 'життя', 'на', 'Марсі'];

// const wordsLength = wordsArr.map((string) => {
//   return string.length;
// });

// const wordsLength = wordsArr.map((string) => string.length);
// console.log('wordsLength', wordsLength);

/*
? Нехай функція getModels повертає масив моделей (поле моделі) всіх автомобілів.
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

// console.table(cars);

// const getModels = (cars) => {
//   const models = cars.map((car) => {
//     return car.model;
//   });
//   return models;
// };

// const models = getModels(cars);

// console.log(models);

// const getModels = (cars) => {
//   return cars.map(({ model }) => model);
// };
// const models = getModels(cars);

// console.log(models);

/*
? Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із зміненим значенням властивості price
? залежно від переданої знижки.
*/

// const makeCarsWithDiscount = (cars, discount) => {
//   const carsWithDiscont = cars.map((car) => {
//     return {
//       ...car,
//       price: (car.price * (1 - discount)).toFixed(2),
//     };
//   });
//   return carsWithDiscont;
// };

// const discontCars = makeCarsWithDiscount(cars, 0.7);
// console.table(discontCars);

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((car) => ({
//     ...car,
//     price: (car.price * (1 - discount)).toFixed(2),
//   }));
// };

// const discontCars = makeCarsWithDiscount(cars, 0.7);
// console.table(discontCars);
