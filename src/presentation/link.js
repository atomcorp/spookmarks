/**
 * returns a <a> link
 * @param {!string} url
 * @param {!string} title
 * @return {!Element}
 */
export const link = (url, title) => {
  const linkContainer = document.createElement('a');
  linkContainer.href = url;
  linkContainer.innerText = title;
  return linkContainer;
};
