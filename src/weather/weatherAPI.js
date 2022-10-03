export function getWeatherByCoords(lat, lon) {
  const WEATHER_KEY = '95632b02f9162f375a368971925f5209';
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function getWeatherByQuery(city) {
  const WEATHER_KEY = '95632b02f9162f375a368971925f5209';

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;

  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
