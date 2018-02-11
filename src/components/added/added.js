/**
 * Handles adding content for the /added page
 */
import {
  getStoreFromSession,
} from '../../store/browser-storage.js';
import { linkElement, nameElement, savedAs } from './elements.js';

/**
 * @return {Object} {link: string, name: string}
 */
const getMessages = () => {
  return getStoreFromSession();
};

export const appendMessages = () => {
  const confirmation = document.querySelector('.js--added');
  const { link, name } = getMessages();
  confirmation.appendChild(linkElement(link));
  if (link !== name) {
    confirmation.appendChild(savedAs());
    confirmation.appendChild(nameElement(name));
  }
};
