/**
 *
 * @param {{title: string, link: string, id: number}} { title, link, id }
 * @return {Element}
 */
export const link = ({ name, link, id }) => {
  const linkDiv = document.createElement('a');
  linkDiv.classList.add('link');
  linkDiv.innerText = name;
  linkDiv.href = link;
  linkDiv.dataset.id = id;
  return linkDiv;
};
