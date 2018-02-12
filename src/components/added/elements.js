/**
 * Elements that get added to added
 */

export const linkElement = (link) => {
  const a = document.createElement('a');
  a.href = link;
  a.innerText = link;
  a.classList.add('added__link');
  return a;
};

export const nameElement = (name) => {
  const div = document.createElement('div');
  div.innerText = name;
  div.classList.add('added__name');
  return div;
};

export const savedAs = () => {
  const span = document.createElement('span');
  span.innerText = ' as ';
  return span;
};
