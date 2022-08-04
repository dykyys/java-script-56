'use strict';
/*
 *  Масиви: літерал масива, елементи, індексація, довжина
 */

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте « rock'n'roll» до кінця.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];
// genres.push("rock'n'roll");
// genres[2] = "rock'n'roll"; //💩
// console.log(genres[genres.length - 1]);
// const deletedElem = genres.shift();
// console.log(deletedElem);
// console.log(genres.shift());

// genres.unshift('Country', 'Reggy');

// console.log(genres);

/*
 * Передача за посиланням та за значенням
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть в консоль обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/

// let a = 10;
// const b = a;

// console.log('a: ', a); // 10
// console.log('b: ', b); // 10

// a = 20;

// console.log(a === b);
// console.log('a: ', a); // 20
// console.log('b: ', b); // 10

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть в консоль обидва ці масиви
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log('arr1: ', arr1); // [1, 2, 3]
// console.log('arr2: ', arr2); // [1, 2, 3]

// arr1.push(10);

// console.log('arr1: ', arr1); // [1, 2, 3, 10]
// console.log('arr2: ', arr2); // [1, 2, 3, 10]
// console.log(arr1 === arr2);

/*
 * Перебір масиву циклами for и for...of
 */

/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з одиниці.
*/

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}:${fruits[i]}`);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/

// const numbers = [2, 17, 94, 1, -20, -50, 23, 0, 37];
// let minNumber = numbers[0];
// for (const number of numbers) {
//   if (number < minNumber) {
//     minNumber = number;
//   }
// }
// console.log(minNumber);

// const numbers = [1000, 2, 17, 94, 1, -20, -50, 23, 0, 37];
// let minNumber = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < minNumber) {
//     minNumber = numbers[i];
//   }
// }
// console.log(minNumber);

// const genres = [
//   'Jazz',
//   'Blues',
//   "rock'n'roll",
//   "rock'n'rol2",
//   'Country',
//   'Reggy',
// ];

// let longestWord = genres[0];

// for (const genre of genres) {
//   if (genre.length > longestWord.length) {
//     longestWord = genre;
//   }
// }
// console.log(longestWord);

/*
? У нас є масив із зарплатами працівників,
? потрібно порахувати загальну суму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (let i = 0; i < salaries.length; i++) {
//   total += salaries[i];
// }
// console.log(total);

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (const salari of salaries) {
//   total += salari;
// }

// console.log(total);

/*
? У нас є кілька масивів із зарплатами співробітників з
? різних відділів, потрібно порахувати загальну суму зарплат
*/

const managerSalaries = [1000, 1500, 2500, 4000, 5000];
const developersSalaries = [8000, 15000, 40000];

// let total = 0;

// for (const salary of managerSalaries) {
//   total += salary;
// }

// for (const salary of developersSalaries) {
//   total += salary;
// }

// console.log(total);

// const allSalaries = managerSalaries.concat(developersSalaries);
// let total = 0;

// for (const salary of allSalaries) {
//   total += salary;
// }

// console.log(total);

/*
 * Базові методи: split и join, indexOf и includes, push, slice и splice, concat
 */

/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються в змінних значеннях у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const values = '8/11';

// const sidesArr = values.split('/');

// const area = Number(sidesArr[0]) * Number(sidesArr[1]);

// console.log(area);

/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob, William, Solomon, Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(', ');
// const phonesArr = phones.split(',');

// for (let i = 0; i < phonesArr.length; i++) {
//   console.log(`${namesArr[i]} - ${phonesArr[i]}`);
// }

/*
? Напиши скрипт, який «розвертає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/

// const string = 'Welcome to the future!';

// const strToArr = string.split('');
// const reverseStrToArr = strToArr.reverse();
// const reverseString = reverseStrToArr.join('');
// console.log(reverseString);

/*
? У нас є масив співробітників, відсортуйте його, щоб співробітники не повторювалися
*/

const employees = [
  'Dennis',
  'Dennis',
  'Shaw',
  'Watkins',
  'Watkins',
  'Ray',
  'Dennis',
];

const filteredEmployees = [];

// console.log(employees.indexOf("Dennis"));
// //'Dennis' index -> 0 === indexOf - > 0 // true
// //'Dennis' index -> 1 === indexOf - > 0 // false
// //'Shaw' index -> 2 === indexOf - > 2 // true
// //'Watkins' index -> 3 === indexOf - > 3 // true
// //'Watkins' index -> 4 === indexOf - > 3 // false
// //'Ray' index -> 5 === indexOf - > 5 // true

for (let i = 0; i < employees.length; i++) {
  console.log(employees[i], 'index', i);
  console.log(employees[i], 'indexOf', employees.indexOf(employees[i]));
  console.log('----------------------');
  if (i === employees.indexOf(employees[i])) {
    filteredEmployees.push(employees[i]);
  }
}
console.log(filteredEmployees);

// //? Співробітник Shaw звільнився, видаліть його з масиву
// const index = employees.indexOf("Shaw");
// employees.splice(index, 1);
// console.log(employees);
// const indexOfRemovedElement = filteredEmployees.indexOf('Shaw');
// filteredEmployees.splice(indexOfRemovedElement, 1);

// console.log(filteredEmployees);

// //? Додати нового співробітника Thornton, перед Watkins;

// const indexOfWatkins = employees.indexOf("Watkins");

// employees.splice(indexOfWatkins, 0, "Thornton");
// console.log(employees);
// const indexOfRay = employees.indexOf("Ray");
// employees.splice(indexOfRay, 2, "Pango");
// console.log(employees)

// slug
// const title = 'Title 1'.split(' ').join('-'); // Title-1
// console.log(title);
