/*
  Produces an edit form for changing
  links and titles
*/

const nameElement = (name) => {
  const nameEl = document.createElement('input');
  nameEl.value = name;
  nameEl.classList.add('js--name');
  return nameEl;
};

const linkElement = (link) => {
  const linkEl = document.createElement('input');
  linkEl.value = link;
  linkEl.classList.add('js--link');
  return linkEl;
};

const submitElement = () => {
  const button = document.createElement('input');
  button.type = 'submit';
  button.value = 'Confirm';
  return button;
};

export const editForm = ({name, link, id}) => {
  const form = document.createElement('form');
  form.dataset.id = id;
  form.classList.add('js--confirm-edit');
  form.appendChild(nameElement(name));
  form.appendChild(linkElement(link));
  form.appendChild(submitElement());
  return form;
};


