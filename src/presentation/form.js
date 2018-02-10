/**
 * Build a HTML form with input
 * and submit button
 * @return {!Element}
 */
export const form = () => {
  const form = document.createElement('form');
  const input = document.createElement('input');
  input.placeholder = 'Add a link';
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'Add';
  form.appendChild(input);
  form.appendChild(submit);
  return form;
};
