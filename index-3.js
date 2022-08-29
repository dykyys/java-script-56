import { userDB } from './heroes.js';

const listREf = document.querySelector('.users__list');
console.log(listREf);
// console.log(userDB);

const markup = userDB.map(({ images, name, appearance, biography }) => {
  return `<li>
<img src="${images.md}" alt="${name}"
 <h2 class="heroes__name">${name}</h2>
<ul class="heroes__biography list">
            <li class="heroes__biography-item"><p class="heroes__gender"><strong>Gender: </strong> ${appearance.gender}</p></li>
            <li class="heroes__biography-item"><p class="heroes__alter-egos"><strong>Alter Egos: </strong> ${biography.alterEgos}</p></li>
        </ul>
    </li>`;
});

listREf.insertAdjacentHTML('beforeend', markup.join(''));
console.log(markup);

/*
<li class="heroes__item">
    <img src="${url}" alt="${name}" class="heroes__picture">
    <div class="heroes__content">
        <h2 class="heroes__name">${name}</h2>
        <ul class="heroes__biography list">
            <li class="heroes__biography-item"><p class="heroes__gender"><strong>Gender: </strong> ${gender}</p></li>
            <li class="heroes__biography-item"><p class="heroes__alter-egos"><strong>Alter Egos: </strong> ${alterEgos}</p></li>
        </ul>
    </div>
</li>
*/
