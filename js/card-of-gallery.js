'use strict';
/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const listRef = document.querySelector('.js-gallery');

const itemEl = document.createElement('li');
itemEl.classList.add('gallery-item');
const linkEl = document.createElement('a');
linkEl.href = '#';

const imgEl = document.createElement('img');
imgEl.src = 'https://picsum.photos/id/237/200/300';
imgEl.alt = 'Labrador';
linkEl.append(imgEl);
itemEl.append(linkEl);
listRef.append(itemEl);
