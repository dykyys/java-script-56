// 'use strict';

const galleryImagesRef = document.querySelectorAll('.gallery img');

const lazyLoad = targets => {
  const options = {
    rootMargin: '10px',
  };
  const onEntry = function (entries, observer) {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        const dataSrc = target.dataset.src;
        target.src = dataSrc;

        observer.unobserve(target);
      }
    });
  };
  const io = new IntersectionObserver(onEntry, options);

  targets.forEach(target => io.observe(target));
};

lazyLoad(galleryImagesRef);

galleryImagesRef.forEach(img => {
  img.addEventListener('load', () => {
    img.classList.add('appear');
  });
});

// const instance = basicLightbox.create(`
//     <img src="./images/img-19.jpg">
// `);

// instance.show();
