const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const searchParams = new URLSearchParams({
  appid: '95632b02f9162f375a368971925f5209',
  units: 'metric',
});

export function getWeatherByCoords(lat, lon) {
  return fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&${searchParams}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

export function getWeatherByQuery(city) {
  return fetch(`${BASE_URL}?q=${city}&${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
