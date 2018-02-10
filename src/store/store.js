import { listHandler } from './handle-list.js';
import initialData from './initial-data.js'; 

const storeHandler = ((data = initialData) => {
  let store = data;
  const updateList = (action, item) => {
    // TODO: add a check for list or page etc
    store.list = listHandler(action, item, store.list);
  };
  const updatePage = (action, page) => {
    // do stuff
  };
  const access = () => {
    return store;
  };
  return {
    updateList: updateList,
    updatePage: updatePage,
    access: access,
  };
})();

export const store = storeHandler;
