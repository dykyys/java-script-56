'use strict';
//* Об'єкт window і document
const titleRef = document.querySelector('h1');

const listItems = document.querySelectorAll('.list__item');

listItems.forEach((item) => {
  //   console.log(item.firstElementChild.textContent);
  const linkRef = item.querySelector('a');
  //   console.log(linkRef.textContent);
  //   const itemsList = item.querySelectorAll('li');
  //   console.log('itemsList', itemsList.length);

  const listRef = item.querySelector('ul');
  console.log(listRef.children.length);
});
