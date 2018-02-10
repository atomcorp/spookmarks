/*
  Add link items to the list
*/
import { store } from '../../store/store.js';
import { 
  REMOVE_FROM_LIST,
  EDIT_IN_LIST,
 } from '../../store/types.js';
import { link } from '../link/link.js';
import {
  setStoreToStorage,
} from '../../store/browser-storage.js';

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
  // TODO: probably needs a refactor
  if (e.target.classList.contains('js--delete')) {
    const item = store.getItemFromList(
      e.target.dataset.id
    );
    store.updateList(REMOVE_FROM_LIST, item);
  } else if (e.target.classList.contains('js--edit')) {
    // add edit field
    const item = store.getItemFromList(
      e.target.dataset.id
    );
    store.updateList(EDIT_IN_LIST, item);
  }
  updateList(store.access().list);
  setStoreToStorage(store.access());
});

export const updateList = appendItems;
