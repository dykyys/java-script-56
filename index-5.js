/*
 *  Метод sort()
 */

const numbers = [
  2, 1, 4, 0, 61, 19, 10, 11, 20, 25, 74, 35, 92, 5, 27, 2, 41, 4, 7, 3, 75,
];

// const sortedNumbers = [...numbers].sort((a, b) =>{
//   if (a < b) {
//     //якщо a < b, a має стояти перед b
//     // console.log('a<b', a<b);
//     // console.log('a', a);
//     // console.log('b', b);
//     //Повертаємо -1 місцями значення не міняємо
//     return -1;
//     //Місцями значення не змінює
//   }
//   if (a > b) {
//     return 1;
//     //змінює місцями значення
//   }
//   return 0;
//   // означає, що рівні, залишаються на своїх місцях
// });

// const sortedNumbers = [...numbers].sort((a, b) => b - a);
// console.log(sortedNumbers);

// const words = ['Gavin', 'Edgar', 'Edith', 'Maurice', 'Rosa', 'Roger'];

// const sortedWords = [...words].sort((a, b) => a.localeCompare(b));

// console.log(sortedWords);

// // const sortedWords = [...words].sort((a, b) => a.localeCompare(b));
// const sortedWords = [...words].sort((a, b) => b.localeCompare(a));


//? Сортування чисел та рядків за замовчуванням
// const numbers = [30, 94, 60, 97, 5];
// const sortedNumbers = [...numbers].sort((a, b) => a - b);

// console.log(`source arr: `, numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// console.log(`source arr: `, words);
// console.log('sortedWords: ', sortedWords);

//? Сортування чисел та рядків за умовою

// const numbers = [30, 94, 60, 97, 5];
// const sortedNumbers = [...numbers].sort((a, b) => a - b);

// console.log(`source arr: `, numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const words = ['Gavin', 'Edgar', 'Edith', 'Maurice', 'Rosa', 'Roger', 'alex'];
// const sortedWords = [...words].sort((a, b) => {
//   return a.localeCompare(b);
// });

// console.log(`source arr: `, words);
// console.log('sortedWords: ', sortedWords);
