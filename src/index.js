import './styles.scss';
import './components/form/form.js';
import './components/list/list.js';
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
document.body.appendChild(component());
