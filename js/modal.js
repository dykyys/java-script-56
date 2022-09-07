'use strict';

const openModalBtn = document.querySelector('.js-modal-open');
const backdropRef = document.querySelector('.js-backdrop');
const closeModalBtn = document.querySelector('.js-modal-close');

const toggleModal = () => {
  backdropRef.classList.toggle('is-open');
};

const openBtnClick = () => {
  toggleModal();
  document.addEventListener('keydown', keyBoardPress);
};

const closeBtnClick = () => {
  toggleModal();
  document.removeEventListener('keydown', keyBoardPress);
};

openModalBtn.addEventListener('click', openBtnClick);

closeModalBtn.addEventListener('click', closeBtnClick);

const onBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    closeBtnClick();
  }
};

backdropRef.addEventListener('click', onBackdropClick);

function keyBoardPress(event) {
  console.log(event.key);
  if (event.key === 'Escape') {
    closeBtnClick();
  }
}
