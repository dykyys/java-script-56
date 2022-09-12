'use strict';

const listItemsRefs = document.querySelectorAll('.pallet__item');
const listRef = document.querySelector('.js-pallet');
listItemsRefs.forEach(item => {
  const randomColor = getRangomColor();
  item.style.backgroundColor = randomColor;
  item.dataset.color = randomColor;
});

const onPalletClick = ({ target }) => {
  if (target.nodeName === 'UL') {
    return;
  }

  const isActive = listRef.querySelector('.active');

  if (isActive) {
    isActive.classList.remove('active');
    isActive.firstElementChild.textContent = '...';
  }
  //null
  //if(isActive){
  //if(isActive.firstElementChild){
  //
  // }
  //}
  if (isActive === target || isActive?.firstElementChild === target) {
    return;
  }

  if (target.nodeName === 'SPAN') {
    target.parentNode.classList.add('active');
    target.textContent = target.parentNode.dataset.color;
    return;
  }

  target.firstElementChild.textContent = target.dataset.color;
  target.classList.add('active');
};
listRef.addEventListener('click', onPalletClick);
// Для динамічного створення палітри
function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
