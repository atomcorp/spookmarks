/*
  Methods for managing the list of links (bookmarks)
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
 * Add an object to list array
 * @param {Object} item
 * @param {!Array} list
 * @return {!Array}
 */
export const addToList = (item, list = []) => {
  return [...list, item];
};

/**
 * Remove an object from array
 * @param {Object} item
 * @param {string} item.id
 * @param {!Array} list
 * @return {!Array}
 */
export const removeFromList = ({id}, list) => {
  return list.reduce((acc, link) => {
    if (link.id !== id) {
      return [...acc, link];
    }
    return acc;
  }, []);
};

/**
 * Using an id, return a complete list object
 * @param {!string} id
 * @param {!Array} list
 * @return {!{}}
 */
export const getFromList = (id, list) => {
  return list.find((item) => {
    return item.id === id;
  });
};

/**
 * Create a link item to go in the list
 * @param {Object} item
 * @param {string} item.name
 * @param {string} item.link
 * @return {Object} item
 */
export const linkItem = ({ name, link }) => {
  return {
    name,
    link,
    id: shortid.generate(),
    created: Date.now(),
  };
};

/**
 * swap boolean of whether item is editable
 * if impose used, must be that boolean
 * @param {Object} itemToEdit
 * @param {Array} list
 * @param {boolean=} impose
 * @return {Object} item
 */
export const toogleEditableinList = (itemToEdit, list, impose) => {
  return list.map((item) => {
    if (item.id === itemToEdit.id) {
      return Object.assign({}, item, {
        editing: imposeEditableState(item, impose),
      });
    }
    return item;
  });
};

/**
 *
 * @param {Object} item
 * @param {boolean=} impose
 * @return {!boolean}
 */
const imposeEditableState = (item, impose) => {
  if (impose === undefined) {
    return !item.editing;
  }
  return impose;
};

/**
 *
 * @param {Object} item
 * @param {string} item.name
 * @param {string} item.link
 * @param {string} item.id
 * @param {Array} list
 * @return {Array} list
 */
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

/**
 * Handle all the variations of updating
 * state for the list section
 * always returns the list
 * @param {!string} action
 * @param {!Object} item
 * @param {!Array} list
 * @return {!Array} list
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

