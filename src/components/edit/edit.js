/*
  Produces an edit form for changing
  links and titles
*/

const nameElement = (name) => {
  const nameEl = document.createElement('input');
  nameEl.value = name;
  return nameEl;
};

const linkElement = (link) => {
  const linkEl = document.createElement('input');
  linkEl.value = link;
  return linkEl;
};

const submitElement = () => {
  const button = document.createElement('input');
  button.type = 'submit';
  button.value = 'Confirm';
  return button;
};

export const buildEditForm = ({name, link}) => {
  const form = document.createElement('form');
  form.appendChild(nameElement(name));
  form.appendChild(linkElement(link));
  form.appendChild(submitElement());
  return form;
};


