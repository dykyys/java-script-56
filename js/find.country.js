'use strict';
const countries = [
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: '47 450 795',
    area: '505.990',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: '109 035 343',
    area: '300.000',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: '31 127 674',
    area: '1.246.700',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: '34 003',
    area: '6.8',
  },
];

const inputRef = document.querySelector('.search-input');
const outputErrorRef = document.querySelector('.output-error');
const listRef = document.querySelector('.country-card');

const handleInput = event => {
  const { value } = event.target;
  const normalizeValue = value.trim().toLowerCase();

  if (!normalizeValue) {
    outputErrorRef.textContent = '';
    listRef.innerHTML = '';
    return;
  }

  const findCountry = countries.filter(({ name }) => {
    return name.toLowerCase().includes(normalizeValue);
  });

  outputErrorRef.textContent = '';

  if (findCountry.length > 1) {
    const markup = createCountriesList(findCountry);
    listRef.innerHTML = markup.join('');
    return;
  }
  if (findCountry.length === 1) {
    const markup = createCountryInfo(findCountry[0]);
    listRef.innerHTML = markup;
    return;
  }
  if (findCountry.length === 0) {
    outputErrorRef.textContent = `Country ${normalizeValue} not found!`;
    listRef.innerHTML = '';
  }
};

const throttledInput = _.throttle(handleInput, 300);

inputRef.addEventListener('input', throttledInput);

function createCountriesList(countries) {
  return countries.map(
    ({ name, capital }) => /*html*/ `<li>
  <h5> Country name: ${name}</h5>
  <p>Country capital: ${capital}</p>
  </li>`
  );
}

function createCountryInfo({ name, area, population, capital }) {
  return /*html*/ `<li>
  <h3> Country name: ${name}</h3>
  <p>Country capital: ${capital}</p>
  <p>population: ${population}</p>
  <p>area: ${area}</p>
  </li>`;
}
