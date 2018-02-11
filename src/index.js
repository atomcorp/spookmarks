import './styles.scss';
import { addFormListener } from './components/form/form.js';
import { updateListInDom } from './components/list/list.js';
import { appendMessages } from './components/added/added.js';
import { enablePager } from './components/pager/pager.js';
const path = window.location.pathname;

if (path === '/') {
  addFormListener();
  updateListInDom();
  enablePager();
} else if (path === '/added/') {
  appendMessages();
}
