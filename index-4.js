/*
 *  Метод find()
 */

// масив.find((element, index, array) => {
// Тіло колбек-функції
// });

/*
? Визначте перше непарне число
*/

// const numbers = [2, 6, 8, 10, 9, 12];

// const firstOddNumber = numbers.find((number) => {
//   if (number % 2 !== 0) {
//     return true;
//   }
// });

// const firstOddNumber = numbers.find((number) => number % 2 !== 0);
// console.log(firstOddNumber);

/*
? Знайдіть автомобіль за моделлю
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

// const getCarByModel = (cars, model) => {
//   return (findCar = cars.find((car) => {
//     if (car.model === model) {
//       return true;
//     }
//   }));
// };

// const getCarByModel = (cars, findModel) => {
//   return (findCar = cars.find(({ model }) => model === findModel));
// };

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));
