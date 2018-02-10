import shortid from 'shortid';

export const store = {
  list: [
    {
      name: 'Google',
      link: 'https://www.google.co.uk/',
      id: 1,
    },
    {
      name: 'The Guardian',
      link: 'https://www.theguardian.com/uk',
      id: 2,
    },
  ],
  page: 1,
};

/**
 * Add an object from array
 * @param {!object} item
 * @param {!object} list
 * @return {!Array}
 */
export const addToList = (item, list) => {
  return [...list, item];
};

/**
 * Remove an object from array
 * @param {!number} idToRemove
 * @param {!{name: string, link: string, id: number}} list
 * @return {!Array}
 */
export const removeFromList = (idToRemove, list) => {
  if (idToRemove !== Number(idToRemove)) {
    throw new Error('ID Must be a number');
  }
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
export const linkItem = ({name, link}) => {
  return { name, link, id: shortid.generate() };
};
