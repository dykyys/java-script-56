'use strict';

const palletItemsRef = document.querySelectorAll('.pallet__item');
const palletListRef = document.querySelector('.js-pallet');

palletItemsRef.forEach(item => {
  const randomColor = getRangomColor();
  item.style.backgroundColor = randomColor;
  // item.setAttribute('data-color', randomColor);
  item.dataset.color = randomColor;
});

const palleteHandleClick = ({ target }) => {
  if (target.nodeName === 'UL') {
    return;
  }

  const isActive = palletListRef.querySelector('.active');

  if (isActive?.firstElementChild === target || isActive === target) {
    isActive.classList.remove('active');
    isActive.firstElementChild.textContent = '...';
    return;
  }

  if (isActive) {
    isActive.classList.remove('active');
    isActive.firstElementChild.textContent = '...';
  }

  if (target.nodeName === 'SPAN') {
    target.parentNode.classList.add('active');
    target.textContent = target.parentNode.dataset.color;
    return;
  }

  target.classList.toggle('active');
  target.firstElementChild.textContent = target.dataset.color;
};
palletListRef.addEventListener('click', palleteHandleClick);

// Для динамічного створення палітри
function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
