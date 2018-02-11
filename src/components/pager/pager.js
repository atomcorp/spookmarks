/**
 * Control and manage what page and therefore
 * which list items are shown
 */
import { store } from '../../store/store.js';
import { compilePageItems } from './elements.js';
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
  return Math.floor(store.access().list.length / 20);
};

const appendPager = (pager) => {
  pager.appendChild(compilePageItems(getHowManyPages()));
};

const pagerListener = (pager) => {
  pager.addEventListener('click', (e) => {
    console.log(e.target);
  });
};

export const enablePager = () => {
  const pager = document.querySelector('.js--pager');
  appendPager(pager);
  pagerListener(pager);
};

