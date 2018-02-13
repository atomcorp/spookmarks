/**
 * Holds the global state,
 * other parts of the app can update and read from it
 */

import {
  listHandler, getFromList,
} from './handle-list.js';
import { pageHandler } from './handle-page.js';
import {
  getStoreFromStorage,
} from './browser-storage.js';
import initialData from './initial-data.js';

/**
 * Holds the app state
 * Can update bookmarks list, update pagination,
 * return link Object from id, and return store itself
 * @param {Object} data
 * @return {Object}
 */
const storeHandler = (data) => {
  let store = data;
  /**
   * updates the list array
   * @param {string} action
   * @param {object} item
   */
  const updateList = (action, item) => {
    store = Object.assign(
      {}, store, {
        list: listHandler(
          action, item, store.list
        ),
      }
    );
  };
  /**
   * updates the page number
   * @param {string} action
   * @param {number} page
   */
  const updatePage = (action, page) => {
    store = Object.assign(
      {}, store, {
        page: pageHandler(action, page, store),
      }
    );
  };
  /**
   * empty the store
   */
  const reset = () => {
    store = Object.assign({}, {
      list: [],
      page: 1,
    });
  };
  /**
   * load dummy data from '.initial-data.js'
   */
  const loadDummies = () => {
    store = Object.assign({}, initialData);
  };
  /**
   * get a item object from list with its id
   * @param {string} id
   * @return {object} item
   */
  const getItemFromList = (id) => {
    return getFromList(id, store.list);
  };
  /**
   * return the store
   * @return {object}
   */
  const access = () => {
    return store;
  };
  return {
    updateList: updateList,
    updatePage: updatePage,
    access: access,
    getItemFromList: getItemFromList,
    reset: reset,
    loadDummies: loadDummies,
  };
};

const currentStorage = getStoreFromStorage();
export const store = storeHandler(currentStorage);
