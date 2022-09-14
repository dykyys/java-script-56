'use strict';

const sectionsListRef = document.querySelectorAll('.section');

sectionsListRef.forEach(section => {
  section.style.backgroundColor = getRangomColor();
});

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

const handleScroll = () => {
  if (window.pageYOffset > 800) {
    const animateSectionRef = document.querySelector('.animated-section');
    animateSectionRef.classList.add('active');
  }
};
const throttledHandleScroll = _.throttle(handleScroll, 300);

document.addEventListener('scroll', throttledHandleScroll);

// let count = 0;

// const thorotleCallBack = _.throttle(() => {
//   count += 1;
//   console.log('scroll', count);
// }, 300);

// let intervalID = setInterval(thorotleCallBack, 1);

// setTimeout(() => {
//   clearInterval(intervalID);
//   console.log('clear');
// }, 910);
