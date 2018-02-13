/**
 * Creates the link (know as item everywhere else) that
 * is placed in the dom list
 */

import { editForm } from '../edit/edit.js';

/**
 * Create a link element
 * @param {{title: string, link: string, id: string}} { title, link, id }
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

/**
 * Create a delete element
 * @param {!string} id
 * @return {!Element}
 */
const deleteButton = (id) => {
  const button = document.createElement('button');
  button.classList.add('link__delete', 'js--delete');
  button.innerText = 'delete';
  button.dataset.id = id;
  return button;
};

/**
 * Create an edit element
 * @param {!string} id
 * @return {!Element}
 */
const editButton = (id) => {
  const button = document.createElement('button');
  button.classList.add('link__edit', 'js--edit');
  button.innerText = 'edit';
  button.dataset.id = id;
  return button;
};

/**
 * If editing is true, return edit section
 * @param {{editing: boolean, name: string, link: string, id: string}}
 *   {editing, name, link, id}
 * @return {!Element | void}
 */
const editSection = ({editing, name, link, id}) => {
  if (editing) {
    return editForm({name, link, id});
  }
};

/**
 * Bundle all the elements into one parent element
 * @param {@function} link
 * @param {@function} deleteEl
 * @param {@function} edit
 * @param {@function} editable
 * @return {!Element}
 */
const linkContainer = (
  link,
  deleteEl,
  edit,
  editable
) => {
  const div = document.createElement('div');
  div.classList.add('link');
  div.appendChild(link);
  div.appendChild(edit);
  div.appendChild(deleteEl);
  if (editable) {
    div.appendChild(editable);
  }
  return div;
};

/**
 * Returns a complete link element
 * @param {{title: string, link: string, id: string}} linkValues
 * @return {!Element}
 */
export const link = (linkValues) => {
  return linkContainer(
    linkElement(linkValues),
    deleteButton(linkValues.id),
    editButton(linkValues.id),
    editSection(linkValues)
  );
};

