/*
  Add link items to the list
*/
import { store } from '../../store/store.js';
import {
  REMOVE_FROM_LIST,
  EDIT_IN_LIST,
  TOOGLE_EDITING,
 } from '../../store/types.js';
import { link } from '../link/link.js';
import {
  setStoreToStorage,
} from '../../store/browser-storage.js';

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

const handleAction = (action, id) => {
  const item = store.getItemFromList(id);
  store.updateList(action, item);
  updateDom();
};

const handleNewValues = (action, newValues) => {
  store.updateList(action, newValues);
  updateDom();
};

const updateDom = () => {
  updateList(store.access().list);
  setStoreToStorage(store.access());
};

list.addEventListener('click', (e) => {
  // TODO: definitely needs a refactor
  if (e.target.classList.contains('js--delete')) {
    handleAction(REMOVE_FROM_LIST, e.target.dataset.id);
  } else if (e.target.classList.contains('js--edit')) {
    handleAction(TOOGLE_EDITING, e.target.dataset.id);
  }
});

list.addEventListener('submit', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('js--confirm-edit')) {
    // TODO: need to remove this from the listener
    // want it to be a form so it still works when
    // submitting
    // TODO: also needs to stop adding more than 1

    handleNewValues(
      EDIT_IN_LIST,
      {
        name: e.target.querySelector('.js--name').value,
        link: e.target.querySelector('.js--link').value,
        id: e.target.dataset.id,
      }
    );
  }
});

export const updateList = appendItems;
