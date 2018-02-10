import shortid from 'shortid';

/*
  Mathods for managing the list of links
  within the store
/*

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
 * @param {!number} idToRemove
 * @param {!{name: string, link: string, id: number}} list
 * @return {!Array}
 */
export const removeFromList = (idToRemove, list) => {
  if (!list) {
    throw new Error('Include the list!');
  }
  return list.reduce((acc, link) => {
    if (link.id !== idToRemove) {
      return [...acc, link];
    }
    return acc;
  }, []);
};

/**
 *
 * @param {{name: string, link: string}} item
 * @return {!{name: string, link: string, id: number}}
 */
export const linkItem = ({ name, link }) => {
  return { name, link, id: shortid.generate() };
};
