import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

// Створення нової дати
const date = new Date();

// Створіть об'єкт Date для дати: 21 лютого 2021 року, 3 години 12 хвилин.
const targetDate = new Date(2021, 1, 21, 20, 12);
// console.log('targetDate', targetDate);
// console.log('👀 > targetDate', targetDate);

// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».

// const getWeekDay = date => {
//   const daysName = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   const index = date.getDay();
//   console.log(daysName[index]);
// };

const getWeekDay = date => {
  const dateOfWeek = format(date, 'kk:mm cccccc', { locale: uk });
  console.log(dateOfWeek);
};

getWeekDay(targetDate);
