/*
  Mathods for managing the list of links
  within the store
*/
import shortid from 'shortid';
import {
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  EDIT_IN_LIST,
  TOOGLE_EDITING,
} from './types.js';


/**
 * Add an object from array
 * @param {!object} item
 * @param {!object} list
 * @return {!Array}
 */
export const addToList = (item, list = []) => {
  return [...list, item];
};

/**
 * Remove an object from array
 * @param {!{string}} id
 * @param {!{name: string, link: string, id: string}} list
 * @return {!Array}
 */
export const removeFromList = ({id}, list) => {
  if (!list) {
    throw new Error('Include the list!');
  }
  return list.reduce((acc, link) => {
    if (link.id !== id) {
      return [...acc, link];
    }
    return acc;
  }, []);
};

export const getFromList = (id, list) => {
  return list.find((item) => {
    return item.id === id;
  });
};

/**
 * Create a link item
 * @param {{name: string, link: string}} item
 * @return {!{name: string, link: string, id: number}}
 */
export const linkItem = ({ name, link }) => {
  return {
    name,
    link,
    id: shortid.generate(),
    created: Date.now(),
  };
};

export const toogleEditableinList = (itemToEdit, list) => {
  return list.map((item) => {
    if (item.id === itemToEdit.id) {
      return Object.assign({}, item, {
        editing: !item.editing,
      });
    }
    return item;
  });
};

export const editItemInList = (
  {name, link, id},
  list
) => {
  return list.map((item) => {
    if (item.id === id) {
      return Object.assign(
        {},
        item,
        {
          name,
          link,
          id,
          editing: false,
          edited: Date.now(),
        }
      );
    }
    return item;
  });
};

// update and return just the list
// add or remove
/**
 * Handle all the variations in state for the
 * list section
 * always returns the list
 * @param {!string} action
 * @param {!{name: string, link: string, id: number}} item
 * @param {!Array} list
 * @return {!Array}
 */
export const listHandler = (action, item, list) => {
  switch (action) {
    case ADD_TO_LIST:
      return addToList(
        linkItem(item),
        list
      );
    case REMOVE_FROM_LIST:
      return removeFromList(item, list);
    case EDIT_IN_LIST:
      return editItemInList(item, list);
    case TOOGLE_EDITING:
      return toogleEditableinList(item, list);
    default:
      return list;
  }
};

