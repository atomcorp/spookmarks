import './styles.scss';
/**
 * Creates an element and styles it
 * @return {HTMLElement}
 */
function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello world, i\'m here!';
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());
