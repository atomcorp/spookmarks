import { store } from '../../store/store.js';
import { ADD_TO_LIST } from '../../store/types.js';
import { updateList } from '../list/list.js';
import {
  setStoreToStorage,
} from '../../store/browser-storage.js';
// import { sentRequestToUrl } from './validation.js';

const form = document.querySelector('.form');
const title = form.querySelector('.js--title');
const link = form.querySelector('.js--link');

const handleSubmit = (e) => {
  e.preventDefault();
  // TODO: add validation
  store.updateList(ADD_TO_LIST, {
    name: title.value,
    link: link.value,
  });
  // TODO: head to new page
  updateList(store.access().list);
  setStoreToStorage(store.access());
};

form.addEventListener('submit',
  handleSubmit
);


