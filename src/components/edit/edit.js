/*
  Produces an edit form for changing
  links and titles
*/

const label = (formElement, text, className) => {
  const label = document.createElement('label');
  label.innerText = text;
  label.appendChild(formElement);
  label.classList.add(className);
  return label;
};

/**
 * Create element for link name
 * @param {string} name
 * @return {!Element}
 */
const nameElement = (name) => {
  const nameEl = document.createElement('input');
  nameEl.value = name;
  nameEl.classList.add('js--name');
  return nameEl;
};

/**
 * Create element for link url
 * @param {string} link
 * @return {!Element}
 */
const linkElement = (link) => {
  const linkEl = document.createElement('input');
  linkEl.value = link;
  linkEl.classList.add('js--link');
  return linkEl;
};

/**
 * Create element for link submit button
 * @return {!Element}
 */
const submitElement = () => {
  const button = document.createElement('input');
  button.type = 'submit';
  button.value = 'Confirm';
  button.classList.add('edit__button');
  return button;
};

/**
 * Create element to hold edit form
 * @param {Object} item
 * @param {string} item.name
 * @param {string} item.link
 * @param {string} item.id
 * @return {!Element}
 */
export const editForm = ({name, link, id}) => {
  const form = document.createElement('form');
  form.dataset.id = id;
  form.classList.add('js--confirm-edit', 'edit');
  form.appendChild(
    label(nameElement(name), 'Name: ', 'edit__title')
  );
  form.appendChild(
    label(linkElement(link), 'Link: ', 'edit__link')
  );
  form.appendChild(submitElement());
  return form;
};


