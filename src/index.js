import './styles.scss';
import './components/form/form.js';
import { updateListInDom } from './components/list/list.js';
import { store } from './store/store.js';

updateListInDom(store.access().list);


