import { store } from '../../store/store.js';
import { ADD_TO_LIST } from '../../store/types.js';
import { updateItems } from '../list/list.js';

const form = document.querySelector('.form');
const title = form.querySelector('.js--title');
const link = form.querySelector('.js--link');

const handleSubmit = (e) => {
  e.preventDefault();
  // TODO: refactor this out
  //       add validation
  store.updateList(ADD_TO_LIST, {
    name: title.value,
    link: link.value,
  });
  console.log(store.access());
  updateItems(store.access().list);
};

form.addEventListener('submit',
  handleSubmit
);


