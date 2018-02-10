/*
  Add link items to the list
*/
import { store } from '../../store/store.js';
import { listHandler } from '../../store/handle-list.js';
import { REMOVE_FROM_LIST } from '../../store/types.js';
import { link } from '../../presentation/link.js';

const list = document.querySelector('.js--list');

// TODO: add page number qualifier here
const appendItems = (items = []) => {
  clearItems();
  // reverse so newer go first
  items.forEach((item) => {
    list.appendChild(link(item));
  });
};

const clearItems = () => {
  // this faster than innerHtml = '' !
  // https://stackoverflow.com/a/3955238/2368141
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('js--delete')) {
    const item = store.getItemFromList(
      e.target.dataset.id
    );
    store.updateList(REMOVE_FROM_LIST, item);
  }
  updateList(store.access().list);
});

export const updateList = appendItems;
