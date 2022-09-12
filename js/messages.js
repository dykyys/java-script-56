'use strict';

const btnListRef = document.querySelector('.js-messages-wrapper');

const handleBtnClick = ({ target }) => {
  if (target.nodeName !== 'BUTTON') {
    return;
  }

  // target.parentNode.remove();

  const liRef = target.closest('li.message');
  liRef.remove();
};

btnListRef.addEventListener('click', handleBtnClick);
