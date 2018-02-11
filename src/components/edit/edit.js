/*
  Produces an edit form for changing
  links and titles
*/

export const buildEditForm = ({name, link}) => {
  const form = document.createElement('form');
  const titleEL = document.createElement('input');
  titleEL.value = name;
  const linkEl = document.createElement('input');
  linkEl.value = link;
  const button = document.createElement('input');
  button.type = 'submit';
  button.value = 'Confirm';
  form.appendChild(titleEL);
  form.appendChild(linkEl);
  form.appendChild(button);
  return form;
};


