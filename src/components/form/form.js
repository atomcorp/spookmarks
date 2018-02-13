import { store } from '../../store/store.js';
import { ADD_TO_LIST } from '../../store/types.js';
import {
  setItemToSession,
  setStoreToStorage,
} from '../../store/browser-storage.js';
import { tryURL } from './validation.js';

const form = document.querySelector('.form');
const title = document.querySelector('.js--title');
const link = document.querySelector('.js--link');
const errors = document.querySelector('.js--errors');

/**
 * Allows user to submit new link if valid
 * If valid, redirect to new page
 * @param {Event} e browser event
 */
const handleSubmit = (e) => {
  e.preventDefault();
  // TODO: add validation
  // formIsValid();
  const tryUrl = tryURL(link.value);
  if (!tryUrl.valid) {
    errors.classList.add('js--active');
    errors.innerText = tryUrl.text;
  } else {
    errors.classList.remove('js--active');
    formIsValid();
  }
};

const formIsValid = () => {
  store.updateList(ADD_TO_LIST, {
    name: title.value,
    link: link.value,
  });
  setItemToSession({
    name: title.value,
    link: link.value,
  });
  setStoreToStorage(store.access());
  clearForm();
  window.location.href = '/added/';
};

/**
 * Empties the form inputs
 */
const clearForm = () => {
  title.value = '';
  link.value = '';
};

/**
 * User tries to add a link
 */
export const addFormListener = () => {
  if (form) {
    form.addEventListener('submit',
      handleSubmit
    );
  }
};


