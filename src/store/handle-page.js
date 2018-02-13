/**
 * This manages the different type of actions a page can recieve
 */

import {
  CHANGE_PAGE,
  PREV_PAGE,
  NEXT_PAGE,
} from './types.js';

const decrementPage = (currentpage) => {
  if (currentpage > 1) {
    return --currentpage;
  }
  return currentpage;
};

const incrementPage = (currentpage, listLength) => {
  if (currentpage !== listLength) {
    return ++currentpage;
  }
  return currentpage;
};

/**
 * Send new page number to store
 * @param {string} action
 * @param {number} page
 * @param {Object} store
 * @return {number}
 */
export const pageHandler = (action, page, store) => {
  switch (action) {
    case CHANGE_PAGE:
      return page;
    case PREV_PAGE:
      return decrementPage(page);
    case NEXT_PAGE:
      return incrementPage(
        page,
        Math.ceil(store.list.length / 20)
      );
    default:
      return page;
  }
};
