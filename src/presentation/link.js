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

const deleteElement = (id) => {
  const div = document.createElement('div');
  div.classList.add('link__delete', 'js--delete');
  div.innerText = 'X';
  div.dataset.id = id;
  return div;
};

// make container with close icon
const linkContainer = (linkElement, deleteElement) => {
  const div = document.createElement('div');
  div.classList.add('link');
  div.appendChild(linkElement);
  div.appendChild(deleteElement);
  return div;
};

export const link = (linkValues) => {
  return linkContainer(
    linkElement(linkValues),
    deleteElement(linkValues.id)
  );
}

