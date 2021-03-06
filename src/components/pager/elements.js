/**
  Add the prev, next and numbers for pager
*/
import {
  CHANGE_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
} from '../../store/types.js';
import { store } from '../../store/store.js';

/**
 * Return button
 * @param {string | number} text
 * @param {string} type
 * @param {number=} id
 * @return {Element}
 */
const button = (text, type, id) => {
  const button = document.createElement('button');
  button.innerText = text;
  button.dataset.type = type;
  if (id) {
    button.dataset.id = id;
    store.access().page === id ? button.classList.add('active') : null;
  }
  button.classList.add('js--new-page', 'pager__button');
  return button;
};

/**
 *
 * @param {number} pages
 * @return {DocumentFragment}
 */
export const compilePageItems = (pages) => {
  const fragment = document.createDocumentFragment();
  fragment.appendChild(button('<', PREV_PAGE));
  Array.from(Array(pages), (empty, i) => {
    fragment.appendChild(button(i + 1, CHANGE_PAGE, i + 1));
  });
  fragment.appendChild(button('>', NEXT_PAGE));
  return fragment;
};
