/*
 * Проміси
 */

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// console.log('console.log: 1');

// Promise.resolve()
//   .then(() => {
//     console.log('promise: 1');
//   })
//   .then(() => {
//     console.log('promise: 2');
//   });

// console.log('console.log: 2');

/*
1 - console.log('console.log: 1');
2 - console.log('console.log: 2');
3 - console.log('promise: 1');
4 - console.log('promise: 2');
5 - console.log('setTimeout');
*/

//? конструктор new Promise(callback(resolve, reject));

// const isSuccess = true;

// // Will run first
// console.log('Before promise.then()');

// const OnSuccess = value => {
//   console.log('Success! ', value);
// };

// const OnError = value => {
//   console.log('Error! ', value);
// };

// const promise = new Promise((resolve, reject) => {
//   if (isSuccess) {
//     resolve(21);
//   } else {
//     reject(34);
//   }
// });

//? then(onSuccess, onError)
//? finally()
// promise
//   .then(OnSuccess)
//   .catch(OnError)
//   .finally(() => {
//     console.log("final");
//   });

// // Will run second
// console.log('After promise.then()');

//? TASK 01
// Чи можна "перевиконати" проміс?
// const OnSuccess = value => {
//   console.log('Success! ', value);
// };

// const OnError = value => {
//   console.log('Error! ', value);
// };
// let number = null;
// const isSuccess = true;
// const promise = new Promise((resolve, reject) => {
//   if (isSuccess) {
//     resolve(21);
//     setTimeout(() => {
//       console.log('in timeout');
//       resolve(55);
//     }, 1000);
//   } else {
//     reject(34);
//   }
// });
// promise
//   .then(OnSuccess)
//   .catch(OnError)
//   .finally(data => {
//     console.log('finaly');
//   });

//? TASK 02
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // 1
//     return data;
//   })
//   .then(data => {
//     console.log(data); // undefined
//     if (!data) {
//       throw new Error('Error in then!');
//     }
//     return '2';
//   })
//   .then(data => {
//     console.log(data); // 2
//     return '2';
//   })
//   .then(data => {
//     console.log(data); // 2
//     return '2';
//   })
//   .then(data => {
//     console.log(data); // 2
//   })
//   .catch(error => {
//     console.log(error.message);
//   });

//? TASK 03
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('Done!');
// });

// promise
// .then(data => {
//   console.log(data);
//   return (data += '!');
// })
// .then(data => {
//   console.log(data);
//   return data + '!';
// })
// .then(data => {
// // .catch(error => {
//   console.log(error);
// });  console.log(data);
// })

/*
 * Є функція, яка генерує випадкові числа від 1 до 4.
 * Написати функцію, яка повертає проміс.
 * Зробіть так, щоб згенероване число було із затримкою функції setTimeout в секундах.
 * Оберніть все це в проміс, який у будь-якому разі повертає час затримки (і в resolve, і в reject).
 * Нехай проміс виконається успішно, якщо згенеровано 1 або 2 (`✅ Resolved after ${delay} sec`), і з помилкою - якщо 3 або 4 (`❌ Rejected after ${delay} sec`).
 */

// const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;
// const number = getRandomNumber();
// const delay = number * 1000;

// const onSuccess = delay => {
//   console.log(`✅ Resolved after ${delay} sec`);
// };
// const onError = delay => {
//   console.log(`❌ Rejected after ${delay} sec`);
// };

// const createPromise = (number, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (number <= 2) {
//         resolve(number);
//       } else {
//         reject(number);
//       }
//     }, delay);
//   });
// };
// createPromise(number, delay)
//   .then(onSuccess)
//   .catch(onError)
//   .finally(() => {
//     console.log('finally');
//   });

/*
 * Methods:
 * Promise.race(array) - повертає перший успішно виконаний або відхилений проміс, зі значенням чи причиною відхилення цього промісу.
 *
 * Promise.all(array) - повертає проміс, який виконається тоді, коли будуть успішно виконані всі проміси, або відхилено будь-який з них.
 *
 */

/*
 * Зробіть 3 проміси - по одному для кожного фреймворку з масиву.
 * У кожному розташована функція setTimeout із випадковою затримкою від 0 до 2 секунд.
 * Зробити так, щоб проміси і резолвилися, і реджектилися випадково.
 * Нехай кожен проміс своїм результатом повертає цю затримку та ім'я фреймворку, а при помилці ще й текст помилки 'Promise error'.
 */

const frameworks = ['React', 'Vue', 'Angular'];
const getRandomDelay = () => Math.floor(Math.random() * 2000);

const makePromise = framework => {
  return new Promise((resolve, reject) => {
    const delay = getRandomDelay();
    setTimeout(() => {
      if (delay < 1500) {
        resolve({ delay, framework });
      } else {
        reject({ delay, framework, error: 'Promise error' });
      }
    }, delay);
  });
};

/*
 * За допомогою Promise.race дочекайтеся завантаження першого промісу, що спрацював, і виведіть результат його роботи на екран: `✅ ${Framework_name} won with ${delay} ms`
 * або результат помилки: `❌ ${error}! ${name} rejected in ${delay} ms`
 */

// const onSuccess = ({ delay, framework }) => {
//   console.log(`✅ ${framework} won with ${delay} ms`);
// };
// const onError = ({ delay, framework, error }) => {
//   console.log(`❌ ${error}! ${framework} rejected in ${delay} ms`);
// };

// const promises = frameworks.map(item => makePromise(item));
const promises = frameworks.map(makePromise);
// Promise.race(promises).then(onSuccess).catch(onError);

/*
 * За допомогою Promise.all отримайте масив результатів
 * Виведіть на екран інформацію, з якою затримкою виконався проміс для кожного фреймфорка: `✅ ${Framework_name} fulfilled in ${delay} ms`
 * Або з якою затримкою зареджектився один із них: `❌ ${error}! ${Framework_name} rejected in ${delay} ms`
 */

const onSuccess = ({ delay, framework }) => {
  console.log(`✅ ${framework} won with ${delay} ms`);
};
const onError = ({ delay, framework, error }) => {
  console.log(`❌ ${error}! ${framework} rejected in ${delay} ms`);
};
Promise.all(promises)
  .then(data => {
    data.forEach(onSuccess);
  })
  .catch(onError);
