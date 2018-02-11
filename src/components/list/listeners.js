/**
 * Pull this out of form.js as it listeners can
 * potentially be added on elements that don't exist on page
 * This tidies up behavoir
 */
import {
  REMOVE_FROM_LIST,
  EDIT_IN_LIST,
  TOOGLE_EDITING,
} from '../../store/types.js';
import { store } from '../../store/store.js';
import { updateListInDom } from './list.js';
import { checkPagerOnItemDelete } from '../pager/pager.js';
/**
 * Add event listeners for list element
 * @param {Element} list
 */
export const addListListeners = (list) => {
  /**
* Listens for any click within the list div
* Sends acions depending on context
*/
  list.addEventListener('click', (e) => {
    // TODO: definitely needs a refactor
    if (e.target.classList.contains('js--delete')) {
      handleClick(REMOVE_FROM_LIST, e.target.dataset.id);
    } else if (e.target.classList.contains('js--edit')) {
      handleClick(TOOGLE_EDITING, e.target.dataset.id);
    }
  });

  /**
  * Listens for any submit within the list div
  * Currently, only the edit item form
  * is intended to use this
  */
  list.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('js--confirm-edit')) {
      handleSubmit(
        EDIT_IN_LIST,
        {
          name: e.target.querySelector('.js--name').value,
          link: e.target.querySelector('.js--link').value,
          id: e.target.dataset.id,
        }
      );
    }
  });
};

/**
* For when a user clicks on a button in list
* Updates item in store, depending on action passed
* Then rerenders dom
* @param {string} action
* @param {string} id
*/
const handleClick = (action, id) => {
  const item = store.getItemFromList(id);
  store.updateList(action, item);
  checkPagerOnItemDelete();
  updateListInDom();
};

/**
 * When a user submits an edit form
 * Updates list item with new values
 * Then rerenders dom
 * @param {string} action
 * @param {Object} newValues = {name, value, id}
 */
const handleSubmit = (action, newValues) => {
  store.updateList(action, newValues);
  updateListInDom();
};
