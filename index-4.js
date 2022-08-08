const filmoteka = [
  {
    id: 1,
    title: 'Duna',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 10,
    actors: [
      'Amelia Gibson',
      'Cameron Clayton',
      'Viola Vasquez',
      'Lula Collins',
      'Victor Nichols',
    ],
    adult: false,
    image: 'https://via.placeholder.com/640/480',
  },
  {
    id: 2,
    title: 'Venom',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 8,
    actors: [
      'Inez Greer',
      'Barry Curtis',
      'Blanche Rios',
      'Glen Perry',
      'Logan Powers',
    ],
    adult: true,
    image: 'https://via.placeholder.com/640/480',
  },
  {
    id: 3,
    title: 'Luca',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 9,
    actors: [
      'Marguerite Gibbs',
      'Lora Alvarez',
      'Jorge Simpson',
      'Thomas Hall',
      'Darrell Hunter',
    ],
    adult: false,
  },
  {
    id: 4,
    title: 'Free Guy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 6,
    actors: [
      'Calvin Andrews',
      'Mamie Myers',
      'Madge Townsend',
      'Ralph Kim',
      'Jorge Reese',
    ],
    adult: false,
    image: 'https://via.placeholder.com/640/480',
  },
  {
    id: 5,
    title: 'Saw',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 7,
    actors: [
      'Adele Marsh',
      'Melvin Burgess',
      'Jesus Reese',
      'Harriet Moreno',
      'Curtis Cox',
    ],
    adult: true,
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив з усіма назвами фільмів.

// const getAllTitlesOfFilms = function (films) {
//   const titles = [];

//   for (const film of films) {
//     titles.push(film.title);
//   }
//   console.log(titles);
// };
// getAllTitlesOfFilms(filmoteka);

//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.

// function findFilmByName(films, filmTitle) {
//   for (const film of films) {
//     if (film.title === filmTitle) {
//       console.log('Ми знайшли фільм що шукали');
//       return film;
//     }
//   }
//   return `Такого фільма ${filmTitle} не знайдено`;
// }
// console.log(findFilmByName(filmoteka, 'Luca'));

//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.

function getAdultFilms(films) {
  const adultFilms = [];

  for (const film of films) {
    if (film.adult) {
      adultFilms.push(film);
    }
  }

  return adultFilms;
}

console.log(getAdultFilms(filmoteka));

//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмежень.
const getNotAdultFilms = function (films) {
  // const nonAdultFilms = [];
  // for (const film of films) {
  //   // if (film.adult === false) {
  //   //   console.log(film);
  //   // }
  // }
  // return nonAdultFilms;
};

//? Напишіть функцію getImagesFilms(films), яка повертає масив постерів усіх фільмів.
const getImagesFilms = function (films) {
  const imagesFilms = [];
  for (const { image = 'https://defaultImage' } of films) {
    console.log(image);
    imagesFilms.push(image);
  }
  console.log(imagesFilms);
  return imagesFilms;
};
