/**
 * Functions for developers to test with
 */

import { store } from '../../store/store.js';
import { updateListInDom } from '../list/list.js';
import { refreshPager } from '../pager/pager.js';

const clearCmd = document.querySelector('.js--clear');
const dummyCmd = document.querySelector('.js--dummy');

/**
 * Perform debug action, then refresh list and pager
 * @param {@function} callback
 */
const update = (callback) => {
  callback();
  updateListInDom();
  refreshPager();
};

/**
 * add event listeners for debug buttons
 */
export const enableDebug = () => {
  clearCmd.addEventListener('click', () => {
    update(store.reset);
  });
  dummyCmd.addEventListener('click', () => {
    update(store.loadDummies);
  });
};
