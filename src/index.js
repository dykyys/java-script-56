'use strict';
import 'material-icons/iconfont/material-icons.css';

import { createMarkup } from './js/createMarkup';
import { getWeatherByCoords, getWeatherByQuery } from './js/weatherAPI';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './js/refs';

navigator.geolocation?.getCurrentPosition(({ coords }) => {
  const { latitude, longitude } = coords;
  getWeatherByCoords(latitude, longitude).then(onSuccess).catch(onError);
});

const handleSubmit = event => {
  event.preventDefault();
  const { user_country } = event.currentTarget.elements;

  const city = user_country.value.trim().toLowerCase();
  if (!city) {
    Notify.failure('We need city name!');
    return;
  }
  getWeatherByQuery(city).then(onSuccess).catch(onError);
  event.currentTarget.reset();
};

function onSuccess(data) {
  const markup = createMarkup(data);
  refs.weatherWrapper.innerHTML = markup;
}

function onError(error) {
  console.log('catch ');
  console.log(error.message);
  refs.weatherWrapper.innerHTML = '';
}

refs.form.addEventListener('submit', handleSubmit);

// function createPromise(position, delay) {
//   const isSuccess = true;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isSuccess) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// let delay = 1000;
// const step = 500;
// const amount = 5;

// for (let i = 0; i < amount; i++) {
//   createPromise(i + 1, delay)
//     .then(({ position, delay }) => {
//       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     })
//     .catch(({ position, delay }) => {
//       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     });
//   delay += step;
// }
