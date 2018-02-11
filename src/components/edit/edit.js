/*
  Produces an edit form for changing
  links and titles
*/

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
  form.classList.add('js--confirm-edit');
  form.appendChild(nameElement(name));
  form.appendChild(linkElement(link));
  form.appendChild(submitElement());
  return form;
};


