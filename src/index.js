import './styles.scss';
import './components/form/form.js';
import { updateListInDom } from './components/list/list.js';
import { store } from './store/store.js';

// get store
// render list
// add item to store from form
// render list
// repeat
updateListInDom(store.access().list);


