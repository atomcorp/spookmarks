import {
  CHANGE_PAGE,
} from './types.js';

/**
 * Send new page number to store
 * @param {string} action
 * @param {number} newPage
 * @param {number} currentpage
 * @return {number}
 */
export const pageHandler = (action, newPage, currentpage) => {
  switch (action) {
    case CHANGE_PAGE:
      return newPage;
    default:
      return currentpage;
  }
};
