import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { UnsplashAPI } from './UnsplashAPI';
import { createMarkup } from './createMarkup';
import { refs } from './refs';

const unsplash = new UnsplashAPI();

const options = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};
const callback = async function (entries, observer) {
  entries.forEach(async entry => {
    // if (entry.isIntersecting && entry.intersectionRect.bottom > 550) {
    if (entry.isIntersecting) {
      unsplash.incrementPage();
      observer.unobserve(entry.target);

      try {
        const { results } = await unsplash.getPhotos();

        const markup = createMarkup(results);

        refs.list.insertAdjacentHTML('beforeend', markup);
        if (unsplash.isShowLoadMore) {
          const target = document.querySelector('.gallery__item:last-child');
          io.observe(target);
        }
      } catch (error) {
        Notify.failure(error.message, 'Щось пішло не так!');
        clearPage();
      }
    }
  });
};
const io = new IntersectionObserver(callback, options);

const handleSubmit = async event => {
  event.preventDefault();

  const {
    elements: { query },
  } = event.currentTarget;
  const searchQuery = query.value.trim().toLowerCase();
  if (!searchQuery) {
    Notify.failure('Ввдедіть дані для пошуку!!!');
    return;
  }
  unsplash.query = searchQuery;

  clearPage();

  try {
    const { results, total } = await unsplash.getPhotos();
    if (results.length === 0) {
      Notify.info(`За вашим запитом
 ${searchQuery} зображень не знайдено!
`);
      return;
    }
    const markup = createMarkup(results);
    refs.list.insertAdjacentHTML('beforeend', markup);

    unsplash.calculateTotalPages(total);

    Notify.success(`Ми знайшли ${total} зображень по запиту ${searchQuery}`);

    if (unsplash.isShowLoadMore) {
      const target = document.querySelector('.gallery__item:last-child');
      console.log(target);

      io.observe(target);
    }
  } catch (error) {
    Notify.failure(error.message, 'Щось пішло не так!');
    clearPage();
  }
};

const onLoadMore = () => {
  unsplash.incrementPage();

  if (!unsplash.isShowLoadMore) {
    refs.loadMoreBtn.classList.add('is-hidden');
  }

  unsplash
    .getPhotos()
    .then(({ results }) => {
      const markup = createMarkup(results);
      refs.list.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => {
      Notify.failure(error.message, 'Щось пішло не так!');
      clearPage();
    });
};

refs.form.addEventListener('submit', handleSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function clearPage() {
  unsplash.resetPage();
  refs.list.innerHTML = '';
  refs.loadMoreBtn.classList.add('is-hidden');
}
