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
import { buildEditForm } from '../edit/edit.js';

const list = document.querySelector('.js--list');

// TODO: add page number qualifier here
const appendItems = (items = []) => {
  clearItems();
  // doc.fragment is better performance apparently
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    fragment.appendChild(link(item));
  });
  list.appendChild(fragment);
};

const clearItems = () => {
  // this faster than innerHtml = '' !
  // https://stackoverflow.com/a/3955238/2368141
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

list.addEventListener('click', (e) => {
  // TODO: definitely needs a refactor
  if (e.target.classList.contains('js--delete')) {
    const item = store.getItemFromList(
      e.target.dataset.id
    );
    store.updateList(REMOVE_FROM_LIST, item);
    updateList(store.access().list);
    setStoreToStorage(store.access());
  } else if (e.target.classList.contains('js--edit')) {
    const item = store.getItemFromList(
      e.target.dataset.id
    );
    e.target.appendChild(buildEditForm(item));
  } else if (e.target.classList.contains('js--confirm')) {
    // TODO: need to remove this from the listener
    // want it to be a form so it still works when
    // submitting
    // TODO: also needs to stop adding more than 1
    const item = store.getItemFromList(
      e.target.dataset.id
    );
    store.updateList(EDIT_IN_LIST, item);
    updateList(store.access().list);
    setStoreToStorage(store.access());
  }
});

export const updateList = appendItems;
