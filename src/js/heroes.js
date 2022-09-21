import heroesDb from './heroes.json';

console.log(heroesDb);

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

const listRef = document.querySelector('.js-heroes-list');

const markup = heroesDb.map(
  ({
    name,
    images: { sm: url },
    appearance: { gender },
    biography: { alterEgos },
  }) => {
    const egos = alterEgos ? alterEgos : 'egos';

    return /*html*/ `<li class="heroes__item">
    <img src="${url}" alt="${name}" class="heroes__picture">
    <div class="heroes__content">
        <h2 class="heroes__name">${name}</h2>
        <ul class="heroes__biography list">
            <li class="heroes__biography-item"><p class="heroes__gender"><strong>Gender: </strong> ${gender}</p></li>
            <li class="heroes__biography-item"><p class="heroes__alter-egos"><strong>Alter Egos: </strong> ${egos}</p></li>
        </ul>
    </div>
</li>`;
  }
);

listRef.insertAdjacentHTML('beforeend', markup.join(''));

// const markup = heroesDb.map(
//   ({
//     name,
//     images: { sm: url },
//     appearance: { gender },
//     biography: { alterEgos = 'alterEgos' },
//   }) => {
//     return `
//     <li class="heroes__item">
//     <img src="${url}" alt="${name}" class="heroes__picture">
//     <div class="heroes__content">
//         <h2 class="heroes__name">${name}</h2>
//         <ul class="heroes__biography list">
//             <li class="heroes__biography-item"><p class="heroes__gender"><strong>Gender: </strong> ${gender}</p></li>
//             <li class="heroes__biography-item"><p class="heroes__alter-egos"><strong>Alter Egos: </strong> ${
//               alterEgos ? alterEgos : 'somethint'
//             }</p></li>
//         </ul>
//     </div>
// </li>`;
//   }
// );

// listRef.insertAdjacentHTML('beforeend', markup.join(''));
