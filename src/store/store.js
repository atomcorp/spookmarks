
const storeTemp = {
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

const storeHandler = ((data = storeTemp) => {
  let store = data;
  const update = (newStore) => {
    // TODO: add a check for list or page etc
    store = Object.assign({}, store, newStore);
  };
  const access = () => {
    return store;
  };
  return {
    update: update,
    access: access,
  };
})();

export const store = storeHandler;
