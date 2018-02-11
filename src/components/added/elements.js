/**
 * Elements that get added to added
 */

export const linkElement = (link) => {
  const a = document.createElement('a');
  a.href = link;
  a.innerText = link;
  return a;
};

export const nameElement = (name) => {
  const div = document.createElement('div');
  div.innerText = name;
  return div;
};

export const savedAs = () => {
  const span = document.createElement('span');
  span.innerText = ' as ';
  return span;
};
