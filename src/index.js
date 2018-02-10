import './styles.scss';
import './components/form/form.js';
import { updateList } from './components/list/list.js';
import { store } from './store/store.js';

// get store
// render list
// add item to store from form
// render list
// repeat
updateList(store.access().list);


