const stringifyStorage = (list) => {
  return JSON.stringify(list);
};

const parseStorage = (string) => {
  return JSON.parse(string);  
};

export const setStoreToStorage = (storage) => {
  localStorage.setItem(
    'bookList', 
    stringifyStorage(storage)
  );
};

export const getStoreFromStorage = (list) => {
  const inStore = localStorage.getItem('bookList');
  if (inStore) {
    return parseStorage(inStore);
  }
  return;
};
