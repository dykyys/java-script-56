'use strict';
//* Атрибути як властивості об'єкту

// textContent
// style.fontSize
// style.color
// style.display

const titleRef = document.querySelector('.js-hero__title');
titleRef.textContent = 'Title form js';
// titleRef.style.fontSize = '50px';
// titleRef.style.color = 'tomato';
// titleRef.style.cssText = 'color: blue; font-size: 30px; position: absolute';

// https://picsum.photos/200/300

/*
 * Доступ до атрибутів
 *
 * elem.hasAttribute(name)
 * elem.getAttribute(name)
 * elem.setAttribute(name, value)
 * elem.removeAttribute(name)
 * elem.attributes
 */

const imgRef = document.querySelector('.js-img');

const swapBtnRef = document.querySelector('[data-swap="false"]');
console.log(swapBtnRef);

swapBtnRef.addEventListener('click', () => {
  imgRef.src = 'https://picsum.photos/200/300';
  //   imgRef.alt = 'random photo';
  imgRef.setAttribute('alt', 'random photo');
  console.log('change image');
  //   swapBtnRef.setAttribute('disabled', true);
});

// swapBtnRef.disabled = true;
// swapBtnRef.setAttribute('disabled', true);

//   saveBtn.removeAttribute('disabled');🤠
//   saveBtn.disabled = false;'🤠

/*
data-atributes
 */

const saveBtnRef = document.querySelector('[data-action="save"]');
const closeBtnRef = document.querySelector('[data-action="close"]');

console.log(closeBtnRef.dataset.action);

closeBtnRef.addEventListener('click', () => {
  saveBtnRef.removeAttribute('disabled');
  closeBtnRef.disabled = true;
});

saveBtnRef.addEventListener('click', () => {
  closeBtnRef.removeAttribute('disabled');
  saveBtnRef.disabled = true;
});
