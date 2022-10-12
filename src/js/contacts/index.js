// https://ru.wikipedia.org/wiki/UTF-8#:~:text=Unicode%20Transformation%20Format%2C%208%2Dbit,%D1%81%207%2D%D0%B1%D0%B8%D1%82%D0%BD%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%BE%D0%B9%20ASCII.
// https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from './service/AXIOScontact.service';
import { createContactMarkup } from './createContactMarkup';
import { refs } from './refs';
import { spinerPlay, spinerStop } from './spinner';

initPage();

async function initPage() {
  try {
    spinerPlay();

    const data = await getContacts();
    const markup = [...data].reverse().map(createContactMarkup);

    refs.list.insertAdjacentHTML('beforeend', markup.join(''));
  } catch ({ message }) {
    Notify.failure(message);
  } finally {
    spinerStop();
  }
}

//fetch by id

// initPage();

// async function initPage() {
//   try {
//     spinerPlay();

//     const data = await getContactById(5);

//     const markup = createContactMarkup(data);

//     refs.list.innerHTML = markup;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     spinerStop();
//   }
// }

const updateBtn = async () => {
  spinerPlay();

  try {
    const data = await updateContact({ name: 'Mango', id: 10 });
    Notify.success(`${data.name} wap updated!`);
  } catch (error) {
    console.log(error);
  } finally {
    spinerStop();
  }
};

refs.updateBtn.addEventListener('click', updateBtn);

const handleDelete = async event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const item = event.target.closest('.js-contact-card');
  if (!item) {
    return;
  }
  try {
    spinerPlay();

    const data = await deleteContact(item.dataset.id);
    Notify.success(`${data.name} was deleted!`);
    item.remove();
  } catch (error) {
    console.log(error);
  } finally {
    spinerStop();
  }
};

refs.list.addEventListener('click', handleDelete);
