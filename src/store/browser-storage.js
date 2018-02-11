import initialData from './initial-data.js';

/**
 * Turns our store object into a string
 * so we can parse it into localStorage
 * @param {Object} store
 * @return {string}
 */
const stringifyStorage = (store) => {
  return JSON.stringify(store);
};

/**
 * Get the localStorage string and
 * turn it back into an object
 * @param {string} string
 * @return {Object}
 */
const parseStorage = (string) => {
  return JSON.parse(string);
};

/**
 * Set the localStorage with store
 * @param {Object} storage
 */
export const setStoreToStorage = (storage) => {
  localStorage.setItem(
    'bookList',
    stringifyStorage(storage)
  );
};

/**
 * Set the localStorage with store
 * popuplates with dummy data if empty
 * TODO: nicer dummy data
 * @return {Object}
 */
export const getStoreFromStorage = () => {
  const inStore = localStorage.getItem('bookList');
  if (inStore) {
    return parseStorage(inStore);
  }
  return initialData;
};

/**
 * Set the sessionStorage item
 * @param {Object} item
 */
export const setItemToSession = (item) => {
  sessionStorage.setItem(
    'addedItem',
    stringifyStorage(item)
  );
};

/**
 * Get the sessionStorage item
 * @return {Object}
 */
export const getStoreFromSession = () => {
  const inStore = sessionStorage.getItem('addedItem');
  if (inStore) {
    return parseStorage(inStore);
  }
  return {'link': 'Oops, something went wrong'};
};
