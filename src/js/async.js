/*
 * Синхронний vs Асинхронний JS
 */

// Стек виклику функцій

// console.log('Start');

// setTimeout(() => {
//   console.log('In setTimeout 2000');
// }, 2000);

// setTimeout(() => {
//   console.log('In setTimeout 1000');
// }, 1000);

// setTimeout(() => {
//   console.log('In setTimeout 1500');
// }, 1500);

// let count;
// for (let i = 0; i < 10000; i += 1) {
//   count = i;
// }
// console.log(count);

// console.log('End');

// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!

// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// setTimeout(
//   (message, delay) => {
//     console.log(message + ' after ' + delay);
//   },
//   1500,
//   'Hello in timeout',
//   '1500'
// );

// Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)
// const intervalId = setInterval(() => {
//   console.log(Date.now());
// }, 1000);

// console.log('intervalId', intervalId);

// document.addEventListener('click', () => {
//   console.log('clear');
//   clearInterval(intervalId);
// });

// https://date-fns.org/v2.28.0/docs/format
