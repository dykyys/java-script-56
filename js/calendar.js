'use strict';

const calendarRef = document.querySelector('.calendar');
const toggleActive = event => {
  const { target } = event;
  if (target.nodeName !== 'TD' || target.textContent === '') {
    return;
  }
  const isActive = calendarRef.querySelector('.active');
  if (isActive) {
    isActive.classList.remove('active');
  }

  if (isActive === target) {
    isActive.classList.remove('active');
    return;
  }
  target.classList.add('active');
};
calendarRef.addEventListener('click', toggleActive);
