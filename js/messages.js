'use strict';

const listRef = document.querySelector('.js-messages-wrapper');

const onListClick = ({ target }) => {
  if (target.nodeName !== 'BUTTON') {
    return;
  }
  // const liRef = target.parentNode;
  const liRef = target.closest('.message');

  if (!liRef) {
    return;
  }

  liRef.remove();
};

listRef.addEventListener('click', onListClick);
