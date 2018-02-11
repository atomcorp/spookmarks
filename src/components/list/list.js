/*
  This essentially covers what list items
  we display on the page
*/
import { store } from '../../store/store.js';
import { link } from '../link/link.js';
import {
  setStoreToStorage,
} from '../../store/browser-storage.js';
import { addListListeners } from './listeners.js';
const list = document.querySelector('.js--list');

/**
 * Removes all the list items
 * then adds them to the dom
 * @param {Array} items
 */
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

/**
 * Removes all items from the dom
 */
const clearItems = () => {
  // this faster than innerHtml = '' !
  // https://stackoverflow.com/a/3955238/2368141
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

const reduceListByPage = (store) => {
  if (store.list.length < 21) {
    return store.list;
  }
  return store.list.slice(
    (store.page * 20) - 20,
    store.page * 20
  );
};

/**
 * Sends the new store to be renderd on page
 * saves new store in local storage
 */
const updateDomAndStorage = () => {
  appendItems(reduceListByPage(store.access()));
  setStoreToStorage(store.access());
};

if (list) {
  addListListeners(list);
}


export const updateListInDom = updateDomAndStorage;
