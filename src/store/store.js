/**
 * Holds the global state
 * any change in state is sent through
 */

import {
  listHandler, getFromList,
} from './handle-list.js';
import initialData from './initial-data.js';
import {
  getStoreFromStorage,
} from './browser-storage.js';

/**
 * Holds the app state
 * Can update bookmarks list, update pagination,
 * return link Object from id, and return store itself
 * @param {Object} data
 * @return {Object}
 */
const storeHandler = (data = initialData) => {
  let store = data;
  const updateList = (action, item) => {
    store = Object.assign(
      {}, store, {
        list: listHandler(
          action, item, store.list
        ),
      }
    );
  };
  const updatePage = (action, page) => {
    // do stuff
  };
  const getItemFromList = (id) => {
    return getFromList(id, store.list);
  };
  const access = () => {
    return store;
  };
  return {
    updateList: updateList,
    updatePage: updatePage,
    access: access,
    getItemFromList: getItemFromList,
  };
};

const currentStorage = getStoreFromStorage();
export const store = storeHandler(currentStorage);
