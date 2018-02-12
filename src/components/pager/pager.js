/**
 * Control and manage what page and therefore
 * which list items are shown
 */
import { store } from '../../store/store.js';
import { compilePageItems } from './elements.js';
import { updateListInDom } from '../list/list.js';
import { CHANGE_PAGE } from '../../store/types';
// print out pagers numbers <1,2,3>, according to list length
// method to update what page number we are
// method to grab correct section of list

/**
 * Return current page
 * @return {number}
 */
const getCurrentPage = () => {
  return store.access().page;
};

/**
 * Get the length, divide by 20
 * Round up (< 20 = 1 page, 78 = 4 pages)
 * @return {number}
 */
const getHowManyPages = () => {
  return Math.ceil(store.access().list.length / 20);
};

/**
 * Add pager to DOM if more than 20 items
 * @param {Element} pager
 */
export const appendPager = (pager) => {
  if (getHowManyPages() < 2) {
    return;
  }
  pager.appendChild(compilePageItems(getHowManyPages()));
};

/**
 * Add listener for clickin on pager buttons.
 * Render DOM after
 * @param {Element} pager
 */
const pagerListener = (pager) => {
  pager.addEventListener('click', (e) => {
    if (e.target.classList.contains('js--new-page')) {
      store.updatePage(
        e.target.dataset.type,
        e.target.dataset.id
          ? Number(e.target.dataset.id)
          : getCurrentPage()
      );
      refreshPager();
      updateListInDom();
    }
  });
};

/**
 * Remove pager buttons
 * @param {Element} pager
 */
const clearPager = (pager) => {
  while (pager.firstChild) {
    pager.removeChild(pager.firstChild);
  }
};

/**
 * Updates pager dom and store
 * Without this and deleting last element of a
 * page (eg 5), would produce empty list as it still
 * thinks it's on page 5
 */
export const checkPagerOnItemDelete = () => {
  // make sure page number is correct,
  // if not rerender
  const currentPages = getHowManyPages();
  if (store.access().page > currentPages) {
    store.updatePage(
      CHANGE_PAGE,
      currentPages
    );
    refreshPager();
  }
};

export const refreshPager = () => {
  const pager = document.querySelector('.js--pager');
  clearPager(pager);
  appendPager(pager);
};

/**
 * Adds pager and listens for pager buttons
 */
export const enablePager = () => {
  const pager = document.querySelector('.js--pager');
  pagerListener(pager);
  appendPager(pager);
};

