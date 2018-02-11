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

/**
 * Add messages to DOM,
 * don't show name if not there, or same as link
 */
export const appendMessages = () => {
  const confirmation = document.querySelector('.js--added');
  const msg = getMessages();
  confirmation.appendChild(linkElement(msg.link));
  if (msg.link !== msg.name && msg.name) {
    confirmation.appendChild(savedAs());
    confirmation.appendChild(nameElement(name));
  }
};
