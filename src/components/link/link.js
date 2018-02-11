import { editForm } from '../edit/edit.js';

/**
 *
 * @param {{title: string, link: string, id: number}} { title, link, id }
 * @return {Element}
 */
const linkElement = ({ name, link, id }) => {
  const a = document.createElement('a');
  a.classList.add('link__a');
  a.innerText = name;
  a.href = link;
  a.dataset.id = id;
  return a;
};

const deleteButton = (id) => {
  const div = document.createElement('div');
  div.classList.add('link__delete', 'js--delete');
  div.innerText = '🗙';
  div.dataset.id = id;
  return div;
};

const editButton = (id) => {
  const div = document.createElement('div');
  div.classList.add('link__edit', 'js--edit');
  div.innerText = '✎';
  div.dataset.id = id;
  return div;
};

const editSection = ({editing, name, link, id}) => {
  if (editing) {
    return editForm({name, link, id});
  }
  return;
};

// make container with close icon
const linkContainer = (
  link,
  deleteEl,
  edit,
  editable
) => {
  const div = document.createElement('div');
  div.classList.add('link');
  div.appendChild(link);
  div.appendChild(deleteEl);
  div.appendChild(edit);
  if (editable) {
    div.appendChild(editable);
  }
  return div;
};

export const link = (linkValues) => {
  return linkContainer(
    linkElement(linkValues),
    deleteButton(linkValues.id),
    editButton(linkValues.id),
    editSection(linkValues)
  );
};

