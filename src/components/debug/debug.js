import { store } from '../../store/store.js';
import { updateListInDom } from '../list/list.js';
import { refreshPager } from '../pager/pager.js';

const clearCmd = document.querySelector('.js--clear');
const dummyCmd = document.querySelector('.js--dummy');

const update = (callback) => {
  callback();
  updateListInDom();
  refreshPager()
};

export const enableDebug = () => {
  clearCmd.addEventListener('click', () => {
    update(store.reset);
  });
  dummyCmd.addEventListener('click', () => {
    update(store.loadDummies);
  });
};
