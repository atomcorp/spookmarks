import './styles.scss';
import { addFormListener } from './components/form/form.js';
import { updateListInDom } from './components/list/list.js';
import { appendMessages } from './components/added/added.js';
import { enablePager } from './components/pager/pager.js';
import { enableDebug } from './components/debug/debug.js';
const path = window.location.pathname;

if (path === '/') {
  addFormListener();
  updateListInDom();
  enablePager();
  enableDebug();
} else if (path === '/added/') {
  appendMessages();
}
