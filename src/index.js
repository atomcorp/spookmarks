import { form } from './presentation/form.js';
import { link } from './presentation/link.js';

import './styles.scss';
/**
 * Creates an element and styles it
 * @return {!Element}
 */
function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello world, i\'m here!';
  element.classList.add('hello');
  return element;
}

/**
 * Create an empty container for links
 * @return {!Element}
 */
const linkContainer = () => {
  const container = document.createElement('div');
  container.classList.add('links');
  return container;
};

document.body.appendChild(component());
document.body.appendChild(linkContainer());
document.body.appendChild(form());
document.body.appendChild(link('http://google.com', 'Google'));
