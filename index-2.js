/*
 * Методи об'єкта і this при зверненні до властивостей у методах
 */

/*
 * - changeTitle(newTitle) - змінює назву фільму
 * - addActor(newActor) - додає актора
 * - updateRating(newRating) - оновлює рейтинг фільму
 * - isAdult - перевіряє вікове обмеження на фільм
 */

const filmDuna = {
  title: 'Duna',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?',
  rating: 10,
  actors: [
    'Rosetta Pena',
    'Clayton Crawford',
    'Larry Norton',
    'Georgia Garrett',
    'Jackson Ballard',
  ],

  adult: false,

  getTitle() {
    // console.log(filmDuna.title);💩
    return this.title;
  },

  changeTitle(newTitle) {
    this.title = newTitle;
  },

  addActor(newActor) {
    this.actors.push(newActor);
  },

  updateRating(newRating = 1) {
    this.rating = newRating;
  },

  updateAdult() {
    this.adult = !this.adult;
  },

  isAdult() {
    return this.adult;
    // return this.adult;
  },
};

// filmDuna.changeTitle('Matrix');
// console.log(filmDuna.getTitle());
// filmDuna.addActor('Eddie');
// filmDuna.updateRating(10);
// filmDuna.updateAdult();
// console.log(filmDuna.isAdult());
// console.log(filmDuna);
