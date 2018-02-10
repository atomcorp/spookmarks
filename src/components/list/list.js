/*
  Add link items to the list
*/

import { link } from '../../presentation/link.js';

const list = document.querySelector('.js--list');

const appendItems = (items = []) => {
  clearItems();
  // reverse so newer go first
  items.reverse().forEach((item) => {
    list.appendChild(link(item));
  });
};

const clearItems = () => {
  // this faster than innerHtml = '' !
  // https://stackoverflow.com/a/3955238/2368141
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

export const updateItems = appendItems;
