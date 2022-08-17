'use strict';
/*
 * Грязні і чисті функції
 */

//! Dirty function

// const numbers = [1, 2, 3, 4, 5];

// const dirtyMultiply = (numbers, value) => {
//   for (let i = 0; i < numbers.length; i += 1) {
//     const element = numbers[i];
//     numbers[i] = element * value;
//   }
// };

// console.log(numbers);
// dirtyMultiply(numbers, 10);
// console.log('after multiply', numbers);

//? Clear function

// const numbers = [1, 2, 3, 4, 5];

// const clearMultiply = (numbers, value) => {
//   const newNambers = [];
//   //   for (let i = 0; i < numbers.length; i++) {
//   //     const element = numbers[i];
//   //     newNambers.push(element * value);
//   //   }

//   for (const element of numbers) {
//     newNambers.push(element * value);
//   }
//   return newNambers;
// };
// console.log('before', numbers);
// const multiNumbers = clearMultiply(numbers, 100);
// console.log(multiNumbers);
// console.log('after multiply', numbers);

//? Clear function

const numbers = [1, 2, 3, 4, 5];

const clearMultiply = (numbers, value) => {
  const newNumber = [...numbers];
  for (let i = 0; i < newNumber.length; i += 1) {
    const element = newNumber[i];
    newNumber[i] = element * value;
  }
  return newNumber;
};

console.log(numbers);
console.log(clearMultiply(numbers, 10));
console.log('after multiply', numbers);
