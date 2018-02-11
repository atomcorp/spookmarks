/*
  This essentially covers what list items
  we display on the page
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

/**
 * For when a user clicks on a button in list
 * Updates item in store, depending on action passed
 * Then rerenders dom
 * @param {string} action
 * @param {string} id
 */
const handleClick = (action, id) => {
  const item = store.getItemFromList(id);
  store.updateList(action, item);
  updateDomAndStorage();
};

/**
 * When a user submits an edit form
 * Updates list item with new values
 * Then rerenders dom
 * @param {string} action
 * @param {Object} newValues = {name, value, id}
 */
const handleSubmit = (action, newValues) => {
  store.updateList(action, newValues);
  updateDomAndStorage();
};

/**
 * Sends the new store to be renderd on page
 * saves new store in local storage
 */
const updateDomAndStorage = () => {
  appendItems(store.access().list);
  setStoreToStorage(store.access());
};

if (list) {
  /**
   * Listens for any click within the list div
   * Sends acions depending on context
   */
  list.addEventListener('click', (e) => {
    // TODO: definitely needs a refactor
    if (e.target.classList.contains('js--delete')) {
      handleClick(REMOVE_FROM_LIST, e.target.dataset.id);
    } else if (e.target.classList.contains('js--edit')) {
      handleClick(TOOGLE_EDITING, e.target.dataset.id);
    }
  });

  /**
   * Listens for any submit within the list div
   * Currently, only the edit item form
   * is intended to use this
   */
  list.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('js--confirm-edit')) {
      // TODO: need to remove this from the listener
      // want it to be a form so it still works when
      // submitting
      // TODO: also needs to stop adding more than 1

      handleSubmit(
        EDIT_IN_LIST,
        {
          name: e.target.querySelector('.js--name').value,
          link: e.target.querySelector('.js--link').value,
          id: e.target.dataset.id,
        }
      );
    }
  });
}


export const updateListInDom = updateDomAndStorage;
