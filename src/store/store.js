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

export const addToStore = (item, store) => {
  return [...store, item];
};

export const removeFromStore = (idToRemove, store) => {
  return store.reduce((acc, link) => {
    if (link.id !== idToRemove) {
      return [...acc, link];
    }
    return acc;
  }, []);
};
