/**
  Add the prev, next and numbers for pager
*/

/**
 * Return button
 * @param {string | number} text
 * @param {string | number} id
 * @return {Element}
 */
const button = (text, id) => {
  const button = document.createElement('button');
  button.innerText = text;
  button.dataset.id = id;
  return button;
};

/**
 *
 * @param {number} pages
 * @return {Element}
 */
export const compilePageItems = (pages) => {
  const fragment = document.createDocumentFragment();
  fragment.appendChild(button('<', 'prev'));
  Array.from(Array(pages), (empty, i) => {
    fragment.appendChild(button(i, i));
  });
  fragment.appendChild(button('>', 'next'));
  return fragment;
};
