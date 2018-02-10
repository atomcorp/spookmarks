/*

  Add link items to the list

*/

import { link } from '../../presentation/link.js';

const list = document.querySelector('.js--list');

const appendItems = (items) => {
  items.forEach((item) => {
    list.appendChild(link(item));
  });
};

export const updateItems = appendItems;
