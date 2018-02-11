import './styles.scss';
import { addFormListener } from './components/form/form.js';
import { updateListInDom } from './components/list/list.js';
import { appendMessages } from './components/added/added.js';
import { store } from './store/store.js';
const path = window.location.pathname;

if (path === '/') {
  addFormListener();
  updateListInDom(store.access().list);
} else if (path === '/added') {
  appendMessages();
}
