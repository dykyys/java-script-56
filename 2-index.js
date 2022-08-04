'use strict';
/*
 * Функціональні висловлювання та оголошення функції.
 * Параметри, аргументи, повернення.
 */

// function ім'я_функції(праметр_1, параметр_2...) {
// Тіло функції
// }

// function showMessage(message = 'some message') {
//   return message;
// }

// console.log(showMessage());

// const showMessage = function () {
//   console.log('Hello world!');
// };

// showMessage();

// function consoleMessage(message, start = 0, end = 10) {
//   for (let i = start; i < end; i += 1) {
//     console.log(i + ' ' + message);
//   }
// }

// console.log('Before function');
// consoleMessage('Hello', 5);
// console.log('After function');

// function addNumbers(a = 0, b = 0) {
//   return a + b;
// }

// const total = addNumbers(2, 5);
// console.log(total);
// const total2 = addNumbers(3, 8);
// console.log(total2);
// console.log(addNumbers(5, 33));

// function add(a, b) {
//   //   const result = a + b;
//   //   if (result > 100) {
//   //     return result;
//   //   }

//   //   return 'Result < 100';

//   const result = a + b;
//   return result >= 100 ? result : 'Result < 100';
// }
// console.log(add(90, 10));

/*
? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
? Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини (зросту).
? Вага та висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
? тобто як роздільник дробової частини може бути кома.
? Індекс маси тіла необхідно округлити до однієї цифри після коми;
*/

// function calcBMI(weight, height) {
//   let normalizeWeight = Number.parseFloat(weight.replace(',', '.'));
//   let normalizeHeight = Number.parseFloat(height.replace(',', '.'));
//   const BMI = normalizeWeight / normalizeHeight ** 2;
//   //   const BMI = normalizeWeight / Math.pow(normalizeHeight, 2);
//   return BMI.toFixed(1);
// }

// const mangoBIM = calcBMI('88,3', '1.75');
// const polyBIM = calcBMI('98,3', '1.65');
// console.log(polyBIM);

/*
? Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
*/

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Один із параметрів не число';
//   }
//   //   if (a < b) {
//   //     return a;
//   //   }
//   //   return b;

//   return a < b ? a : b;
// }

// console.log(min(5, 'n'));

/*
? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких будуть передані до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// function getRectArea(dimensions) {
//   const dimensionsToArray = dimensions.split(' ');
//   return Number(dimensionsToArray[0]) * Number(dimensionsToArray[1]);
// }
// const area = getRectArea('8 11');
// console.log(area);

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцію logItems(items), яка отримує масив та використовує цикл for,
? який для кожного елемента масиву виводитиме в консоль повідомлення
? у форматі <номер елемента> - <значення елемента>. Нумерація елементів має починатися з першого.
? Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango,
? а для індексу 2 виведе 3 – Ajax.
*/

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} : ${items[i]}`);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// function task1() {
//   console.log("before task 2");
//   task2();
//   console.log("after task 2");
//   console.log("Completed task 1");
// }
// function task2() {
//   console.log("before task 3");
//   task3();
//   console.log("after task 3");
//   console.log("Completed task 2");
// }

// function task3() {
//   console.log("Completed task 3");
// }
// console.log("before task 1");
// task1();
// console.log("after task 1");

// function foo() {
//   console.log('foo - start');
//   console.log('foo - 1');
//   baz();
//   console.log('Code back 151');
//   bar();
//   console.log('Code back 153');
//   console.log('foo- end');
// }
// function baz() {
//   console.log('baz - start');
//   console.log('baz - 2');
//   console.log('baz - end');
// }
// function bar() {
//   console.log('bar - start');
//   console.log('bar-3');
//   console.log('bar - end');
//   //   foo();
// }
// console.log('before foo');
// foo();
// console.log('after foo');

// function calculateTotal(number) {
//   let total = 0;

//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//     //   total = total + 1
//   }
//   return total;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));

/*

? Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
? У параметри names і phones будуть передані рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");
//   for (let i = 0; i < phonesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }

// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// printContactsInfo(
//   "Vera,Carr,Violet,Sherman",
//   "89001234567,89001112233,890055566377,890055566300"
// );

/*
? Напиши функцію findLargestNumber(numbers), яка шукає найбільше число в масиві.
*/

// function findLargestNumber(numbers) {
//   let largestNumber = numbers[0];

//   for (const number of numbers) {
//     // if (number > largestNumber) {
//     //   largestNumber = number;
//     // }
//     // if (number < largestNumber) {
//     //   continue;
//     // }
//     // largestNumber = number;
//     largestNumber = number > largestNumber ? number : largestNumber;
//   }
//   return largestNumber;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
? Усі аругменти будуть лише числами.
*/

// function calcAverage() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total / arguments.length;
// }

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс до кінця колекції
? removeCourse(name) - видаляє курс із колекції
? updateCourse(oldName, newName) – змінює ім'я на нове
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(course) {
//   const isIncludes = courses.includes(course);
//   if (isIncludes) {
//     console.log(`${course} вже є в списку!`);
//     return;
//   }
//   courses.push(course);
// }

// function removeCourse(name) {
//   const indexOfcourse = courses.indexOf(name);
//   if (indexOfcourse === -1) {
//     console.log(`${name} такога курса в списку немає, видалити неможливо!`);
//     return;
//   }
//   courses.splice(indexOfcourse, 1);
// }
// function updateCourse(oldName, newName) {
//   const indexOfcourse = courses.indexOf(oldName);
//   if (indexOfcourse === -1) {
//     console.log(`${oldName} такога курса в списку немає, замінити неможливо!`);
//     return;
//   }
//   courses.splice(indexOfcourse, 1, newName);
// }

// addCourse('Express');
// addCourse('React');
// removeCourse('CSS');
// removeCourse('Linux');
// updateCourse('HTML', 'Vue');
// updateCourse('Linux', 'Windows');
// console.table(courses);
