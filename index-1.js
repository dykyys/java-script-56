/*
 * Створення об'єкта (конструктор, літерал).
 * Властивості, ключі (ім'я) та значення
 */

// Сутність фільм (назва, опис, рейтинг, акторський склад, вікове обмеження)
const film = {
  title: 'Matrix',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nemo iusto! Et doloribus praesentium laboriosam dolorem veritatis, magnam atque amet!',
  rating: 4,
  actors: ['Aiden', 'Mason', 'Jimmy'],
  isAdult: true,
  // location: {
  // country: 'Jamaica',
  // city: 'Ocho Rios',
  // },
};

// film.rating = 5;

// film.location = {};
// film.location.country = 'Jamaica';
// film.location.city = 'Ocho Rios';

// film.location = {
//   country: 'Jamaica',
//   city: 'Ocho Rios',
// };

// const userLocation = 'location';
// film[userLocation] = {
//   country: 'Jamaica',
//   city: 'Ocho Rios',
// };
// console.log(film);

// console.log(film.location.city);
// console.log(film['location']['city']);

/*
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 */

// film['preview'] = './images/img.jpg';
// film.preview = './images/img.jpg';

// film.isAdult = false;
// film['isAdult'] = false;

// console.log(film);
/*
 *Короткий запис властивостей
 */

// const username = 'mango';
// const email = 'test@gmail.com';

// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

// const name = prompt("Введіть ваше ім'я");
// const email = prompt('Ваш email');

// const user = {
//   name,
//   email,
// };

// console.log(user);

// const f = {};
// const d = {};
// const a = {
//   b: 1,
//   c: 2,
// };

// const userName = 'name';

// a[userName] = 'Mango';
// a[f] = 3;
// a[d] = 4;
// console.log(a);

/*
 * Посилальний тип
 */

const obj = {
  a: 1,
  b: 2,
};

const obj2 = obj;

console.log('obj: ', obj);
console.log('obj2: ', obj2);
console.log(obj === obj2);

obj2.c = 5;

console.log('obj: ', obj);
console.log('obj2: ', obj2);
console.log(obj === obj2);

const courses = [
  'js',
  'nodejs',
  'html',
  'css',
  'html',
  'js',
  'nodejs',
  'css',
  'react',
  'js',
  'nodejs',
  'react',
];

// const stats =
// {
//   css: 2,
//   html: 2,
//   js: 3,
//   nodejs: 3,
//   react: 2
// };

// const stats = {};

// for (const course of courses) {
//   if (stats[course]) {
//     stats[course] += 1;
//   } else {
//     stats[course] = 1;
//   }
// }
// console.log(stats);
