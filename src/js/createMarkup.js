import { format } from 'date-fns';
export function createMarkup({ name, weather, main, sys, clouds }) {
  const sunrise = format(new Date(sys.sunrise * 1000), 'HH:mm ');
  const sunset = format(new Date(sys.sunset * 1000), 'HH:mm');

  return /*html*/ `<div class="weather__card">
      <h2 class="city-name">${name}</h2>
      <ul class="weather-info list">
          <li class="weather-info-item">
              <p class="temp">Температура: ${main.temp} <sup>&#176;</sup>С</p>
          </li>
          <li class="weather-info-item">
              <p class="feels-like-temp">Відчувається як: ${main.feels_like} <sup>&#176;</sup>С</p>
          </li>
          <li class="weather-info-item">
              <p class="sunrise-time">Схід сонця: ${sunrise}</p>
          </li>
          <li class="weather-info-item">
              <p class="sunset-time">Захід сонця: ${sunset}</p>
          </li>
          <li class="weather-info-item">
              <p class="clouds">Хмарність: ${clouds.all}%</p>
          </li>
          <li><img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}" /></li>
      </ul>
  </div>`;
}
