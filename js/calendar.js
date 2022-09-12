'use strict';

const tableRef = document.querySelector('.calendar');

const onCalendarClick = event => {
  const { target } = event;

  if (target.nodeName !== 'TD' || target.textContent === '') {
    return;
  }

  const isActive = tableRef.querySelector('.active');

  if (isActive) {
    isActive.classList.remove('active');
  }

  if (isActive === target) {
    return;
  }

  target.classList.add('active');
};

tableRef.addEventListener('click', onCalendarClick);
