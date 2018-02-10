import { store } from '../../store/store.js';
import { 
  addToList, linkItem,
} from '../../store/handle-list.js';
import { updateItems } from '../list/list.js';

const form = document.querySelector('.form');
const title = form.querySelector('.js--title');
const link = form.querySelector('.js--link');

const handleSubmit = (e) => {
  e.preventDefault();
  // TODO: refactor this out
  //       add validation
  store.update(
    Object.assign(
      {},
      store.access(),
      {
        list: addToList(
          linkItem({
            name: title.value,
            link: link.value,
          }), 
          store.access().list
        ),
      }
    )
  );
  updateItems(store.access().list);
};

form.addEventListener('submit',
  handleSubmit
);


