/*
 *  Метод reduce()😎
 */

// масив.reduce((previousValue, element, index, array) => {
// Тіло колббек-функції
// }, initialValue);

/*
? Порахуємо суму масиву чисел
*/

const numbers = [1, 2, 3, 4, 5];

// 1 ітерація
// prevValue = 0; el = 1; idx = 0;
// prevValue = 1;

// 2 ітерація
// prevValue = 1; el = 2; idx = 1;
// prevValue = 3;

// 3 ітерація
// prevValue = 3; el = 3; idx = 2;
// prevValue = 6;

// 4 ітерація
// prevValue = 6; el = 4; idx = 3;
// prevValue = 10;

// 5 ітерація
// prevValue = 10; el = 5; idx = 4;
// prevValue = 15;

// let totalSum = numbers.reduce((acc, number) => {
//   return acc + number;
// }, 0);

// let totalSum = numbers.reduce((acc, number) => acc + number, 0);
// console.log(totalSum);

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTwits = tweets.reduce((acc, item) => {
//   console.log('acc', acc);
//   console.log('item.tags', item.tags);
//   acc.push(...item.tags);
//   return acc;
// }, []);

// const allTwits = tweets.reduce((acc, item) => [...acc, ...item.tags], []);

// const allTwits = tweets.flatMap((item) => item.tags);

// console.log(allTwits);

const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
];

const inAscendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({ eyeColor }) => eyeColor === color);
// };

// Більш детально по цьому прикладу, а саме чому так звертатися потрібно  acc[tag]

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);

console.log(tags);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
const getTagStats = (acc, tag) => {
  console.log(acc);
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

const countTags = (tags) => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);
