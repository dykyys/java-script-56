'use strict';
/*
 * Основи подій. Створення та видалення слухачів. Об'єкт події
 */

/*
 ?- Найменування колбеків для слухачів
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

// // https://picsum.photos/200/300

const swapBtnRef = document.querySelector('.js-swap-btn');
const removeListenerBtnRef = document.querySelector('.js-remove-listener');

const imgRef = document.querySelector('.js-img');

function handleClick() {
  imgRef.src = 'https://picsum.photos/200/300';
  imgRef.alt = 'random photo';
  console.log('this', this);
}

swapBtnRef.addEventListener('click', handleClick);

const removeClick = () => {
  console.log('remove');
  swapBtnRef.removeEventListener('click', handleClick);
  swapBtnRef.disabled = true;
};

removeListenerBtnRef.addEventListener('click', removeClick);
