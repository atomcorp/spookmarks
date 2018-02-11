/**
  Add the prev, next and numbers for pager
*/
import {
  CHANGE_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
} from '../../store/types.js';


/**
 * Return button
 * @param {string | number} text
 * @param {string | number} id
 * @return {Element}
 */
const button = (text, type, id) => {
  const button = document.createElement('button');
  button.innerText = text;
  button.dataset.type = type;
  if (id) {
    button.dataset.id = id;
  }
  button.classList.add('js--new-page');
  return button;
};

/**
 *
 * @param {number} pages
 * @return {Element}
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
