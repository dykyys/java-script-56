'use strict';
//* Об'єкт style, cssText

const openModalBtnRef = document.querySelector('.js-modal-btn');
const backdropRef = document.querySelector('.js-backdrop');
console.log(openModalBtnRef);
console.log(backdropRef);

openModalBtnRef.addEventListener('click', () => {
  backdropRef.classList.toggle('is-backdrop-open');
  openModalBtnRef.classList.add('btn-active');
  //   openModalBtnRef.className = 'btn-active';
});
