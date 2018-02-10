import shortid from 'shortid';

export const store = [
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
];

/**
 * Add an object from array
 * @param {!object} idToRemove
 * @param {!object} store
 * @return {!Array}
 */
export const addToStore = (item, store) => {
  return [...store, item];
};

/**
 * Remove an object from array
 * @param {!number} idToRemove
 * @param {!object} store
 * @return {!Array}
 */
export const removeFromStore = (idToRemove, store) => {
  if (idToRemove !== Number(idToRemove)) {
    throw new Error('ID Must be a number');
  }
  if (!store) {
    throw new Error('Include the store!');
  }
  return store.reduce((acc, link) => {
    if (link.id !== idToRemove) {
      return [...acc, link];
    }
    return acc;
  }, []);
};

export const linkItem = (name, link) => {
  return { name, link, id: shortid.generate() };
};
